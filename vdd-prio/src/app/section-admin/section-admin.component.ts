import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Section, SectionAdminService } from './section-admin.service';

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.css']
})
export class SectionAdminComponent implements OnChanges {
  @Input() businessID: string = ""
  items: Section[] = []
  selected: Section | null = null;

  constructor(private section_service: SectionAdminService) {
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.businessID) {
        this.section_service.getSections(this.businessID).then((items)=>{
          this.section_service.items?.subscribe((items)=>{
            this.items = items;
          })
        })

    }
  }

  onSelected(val: Section) {
    this.selected = val;
  }

  onNewSection() {
    if(this.businessID.length) {
      this.section_service.createSection(new Section(this.businessID))
    } else {
      alert("No BusinessID to create new Section!");
    }
  }

}
