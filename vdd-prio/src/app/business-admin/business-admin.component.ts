import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Business, BusinessAdminService } from './BusinessAdmin.service';

@Component({
  selector: 'app-business-admin',
  templateUrl: './business-admin.component.html',
  styleUrls: ['./business-admin.component.css']
})
export class BusinessAdminComponent implements OnInit {

  selected: Business | null = null;

  constructor(public business_service: BusinessAdminService) {
  }

  get BusinessItems(): Business[] {
    return this.business_service._businesses;
  }

  get EMPTY(): boolean {
    return this.business_service._businesses.length == 0
  }

  ngOnInit() {
  }

  onNewBusiness() {
    this.business_service.createBusiness(new Business())
  }

  onSelectBusiness(index: number) {
    this.selected = this.BusinessItems[index];
  }

  onSaved(item: Business) {
    this.selected = item;
  }

}
