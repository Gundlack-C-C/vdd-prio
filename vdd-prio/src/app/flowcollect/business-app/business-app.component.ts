import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import * as d3 from 'd3';
import { Business, BusinessAdminService } from 'src/app/business-admin/BusinessAdmin.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Section, SectionAdminService } from 'src/app/section-admin/section-admin.service';
import { Observable } from 'rxjs';

function getDateOnly(T: Date) {
  T.setMilliseconds(0);
  T.setSeconds(0);
  T.setMinutes(0);
  T.setHours(0)
  return T;
}


function getDictionaryArray(items: any[]) {
  let data: {key: string, val: number, T: string, section: string}[] = []
  items.forEach((item: {createdAt: any, values: {[key: string]: number[]}}) => {
    let T = getDateOnly(new Date(item.createdAt.toMillis())).toDateString();

    Object.values(item.values).forEach((values, section) => {
        values.forEach((val, i)=>{
          data.push({key: i.toString(),val: val, T: T, section: section.toString() })
        });
    });
  });
  return data;
}

function getSectionStatistics(items: {key: string, val: number, T: string, section: string}[], d3_format=false) {
  let section_group = d3.group(items, d => d.section)
  let statistics: {[section: string]: any[]} = {};
  section_group.forEach((item, section)=>{
    let stats: any[][] = [];

    if(d3_format)
      stats.push(['key'].concat(...d3.group(item, d=> d.T).keys()))

    d3.group(item, d => d.key, d=>d.T).forEach((item_key, key) => {
      let key_stats = [];

      if(d3_format)
        key_stats.push(key);

      item_key.forEach((item_T, T) => {
        let med = d3.median(item_T, d=>d.val)
        key_stats.push(med ? med.toString() : "0")
      })
      stats.push(key_stats)
    });

    statistics[section] = stats;
  });
  return statistics;
}

@Component({
  selector: 'app-business-app',
  templateUrl: './business-app.component.html',
  styleUrls: ['./business-app.component.css']
})
export class BusinessAppComponent implements OnInit {
  polls: string[] = ['test'];
  poll = "test";
  sections: {[section: string]: any[]} = {}
  data: {key: string, val: number, T: string, section: string}[] = []
  dates: any[] = [];
  loaded = false;
  uid: string = "";

  _states = [{
    action: 'Unternehmensinformationen',
    message: 'Wir laden ihre Unternehmensinformationen!'
  }, {
    action: 'Umfrage',
    message: 'Wir laden ihre Umfragen!'
  },{
    action: 'Fertig',
    message: 'Alle Daten geladen!'
  }];
  status = 0

  business!: Business | null;
  business_sections: Section[] = [];

  constructor(private auth_service: AuthService, private business_service: BusinessAdminService, private section_service: SectionAdminService, private feedback_servcie: FeedbackService) {
    if(this.auth_service.userState){
      this.uid = this.auth_service.userState.uid;
      this.status = 0;
      this.business_service.getBusiness(this.uid).then((bizRef: Observable<Business[]>) => {
        bizRef.subscribe((business: Business[]) => {
          this.business = business[0];
          this.status = 1;
          this.loadSections(this.business.sections[0]).then((section: Section) => {
            this.business_sections.push(section);
            this.polls[0] = section.pollID;
            this.loadPoll(this.poll).then(()=> {
              this.status = 2;
            })
          });
        });
      });
    }
  }

  loadPoll(pollID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.feedback_servcie.getPolls(pollID).subscribe((items: any[]) => {

        this.data = getDictionaryArray(items);

        this.sections = getSectionStatistics(this.data);

        this.dates = Array.from(d3.group(this.data, d => d.T).keys())
        resolve(true)
      });
    });
  }

  loadSections(sectionID: string): Promise<any> {
    return this.section_service.getSection(sectionID);
  }

  ngOnInit() {
  }

  get PollURL() {
    return "/flowcollect-app"
  }
  get HostURL() {
    return window.location.host;
  }
  get Sympthome() {
    return this.sections["0"]
  }

  get Ursachen() {
    return this.sections["1"]
  }

  get Dates() {
    return this.dates;
  }

  copyURL(id: string) {
    var domElement = document.getElementById(id);
    if(domElement && domElement instanceof HTMLInputElement) {
      domElement.select()
      document.execCommand('copy')
      domElement.setSelectionRange(0,0)
    }

  }
}
