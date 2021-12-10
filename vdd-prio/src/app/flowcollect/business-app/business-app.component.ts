import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Business, BusinessAdminService } from 'src/app/business-admin/BusinessAdmin.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Section, SectionAdminService } from 'src/app/section-admin/section-admin.service';
import { Observable } from 'rxjs';
import { MentalDashboardViewComponent } from '../mental-dashboard-view/mental-dashboard-view.component';


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

  @ViewChild(MentalDashboardViewComponent) dashboardRef!: MentalDashboardViewComponent;

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

  onDownloadCSV() {
    console.log("Download CSV");
    if(this.dashboardRef) {

      if (!this.dashboardRef.data || !this.dashboardRef.data.length) {
        return;
      }
      const T: Date = new Date();
      const filename = `${T.getMonth()}.${T.getDay()}.${T.getFullYear()}.csv`;
      const cols = Object.keys(this.dashboardRef.data[0])
      const rows = this.dashboardRef.data.map((r)=> Object.values(r));
      const separator = ";";

      const csvContent =
        `sep=${separator}\n` +
        cols.join(separator) +
        '\n' +
        rows.map(row => row.join(separator)).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

      const link = document.createElement('a');
      if (link.download !== undefined) {
          // Browsers that support HTML5 download attribute
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
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
