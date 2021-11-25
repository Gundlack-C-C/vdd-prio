import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Business, BusinessAdminService } from '../BusinessAdmin.service';


@Component({
  selector: 'app-business-edit-form',
  templateUrl: './business-edit-form.component.html',
  styleUrls: ['./business-edit-form.component.css']
})
export class BusinessEditFormComponent implements OnChanges {
  @Input() item: Business = new Business()
  @Output() onSaved = new EventEmitter<Business>()
  @Output() onSaving = new EventEmitter<any>()

  form = this.formBuilder.group({
    name: '',
    description:'',
  });

  constructor(private formBuilder: FormBuilder, private business_service: BusinessAdminService) { }

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

    this.item.description = val.description
    this.item.name = val.name;

    this.onSaving.next(this.item)
    this.business_service.updateBusiness(this.item).then(() => {
      this.onSaved.next(this.item)
    });
  }

}
