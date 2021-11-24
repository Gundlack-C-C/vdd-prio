import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Business, BusinessAdminService } from '../BusinessAdmin.service';


@Component({
  selector: 'app-business-edit-form',
  templateUrl: './business-edit-form.component.html',
  styleUrls: ['./business-edit-form.component.css']
})
export class BusinessEditFormComponent implements OnChanges {
  @Input() item: Business | null = null
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
    if(this.item) {
      val.id = this.item.id
    }
    this.onSaving.next(val)
    this.business_service.updateBusiness(val).then(() => {
      this.onSaved.next(val)
    });
  }

}
