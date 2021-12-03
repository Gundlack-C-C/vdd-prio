import { Component, ViewEncapsulation } from '@angular/core';
import { Business, BusinessAdminService } from 'src/app/business-admin/BusinessAdmin.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Section, SectionAdminService } from 'src/app/section-admin/section-admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-business-app',
  templateUrl: './business-app.component.html',
  styleUrls: ['./business-app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessAppComponent {
  polls: string[] = ['test'];
  pollSelected = "test";

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

  constructor(private auth_service: AuthService, private business_service: BusinessAdminService, private section_service: SectionAdminService) {
    if(this.auth_service.userState){
      this.uid = this.auth_service.userState.uid;
      this.status = 0;
      this.business_service.getBusiness(this.uid).then((bizRef: Observable<Business[]>) => {
        bizRef.subscribe((business: Business[]) => {
          this.business = business[0];
          this.status = 1;

          Promise.all(this.business.sections.map((sectionID: string)=> {
            return this.loadSection(sectionID)
          })).then((sections: Section[]) => {
            this.business_sections = sections;
            this.polls = sections.map((section:Section) => section.pollID);
            this.polls.push("test");
          });
        });
      });
    }
  }

  loadSection(sectionID: string): Promise<any> {
    return this.section_service.getSection(sectionID);
  }

  get PollURL() {
    return "/flowcollect-app"
  }

  get HostURL() {
    return window.location.host;
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
