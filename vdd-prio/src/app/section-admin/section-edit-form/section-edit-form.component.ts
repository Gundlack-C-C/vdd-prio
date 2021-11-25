import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Section, SectionAdminService } from '../section-admin.service';

@Component({
  selector: 'app-section-edit-form',
  templateUrl: './section-edit-form.component.html',
  styleUrls: ['./section-edit-form.component.css']
})
export class SectionEditFormComponent implements OnChanges {
  @Input() item: Section = new Section("")
  @Output() onSaved = new EventEmitter<Section>()
  @Output() onSaving = new EventEmitter<any>()
  constructor(private formBuilder: FormBuilder, private section_service: SectionAdminService) { }

  form = this.formBuilder.group({
    name: "",
    descriptin: ""
  });

  ngOnChanges(changes: SimpleChanges) {
    if(changes.item) {
      this.form = this.formBuilder.group({
        name: this.item ? this.item.name : '',
        description: this.item ? this.item.description : '',
      });
    }
  }

  onSubmit() {
    let val = this.form.value;
    this.item.name = val.name;
    this.item.description = val.description;

    this.section_service.updateSection(this.item);
  }

}
