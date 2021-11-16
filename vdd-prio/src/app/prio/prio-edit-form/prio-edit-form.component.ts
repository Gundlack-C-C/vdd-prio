import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export class Prio {
  name: string = "";
  description: string = "";
  type: string = "";
}

@Component({
  selector: 'app-prio-edit-form',
  templateUrl: './prio-edit-form.component.html',
  styleUrls: ['./prio-edit-form.component.css']
})
export class PrioEditFormComponent implements OnInit {
  @Input() item: {index: number, value: Prio} | null = null;
  @Output() prioNewEvent = new EventEmitter<Prio>();
  @Output() prioChangedEvent = new EventEmitter<{index: number, value: Prio}>();

  prioForm = this.formBuilder.group({
    name: this.item ? this.item.value.name : '',
    description: this.item ? this.item.value.description : '',
    type: this.item ? this.item.value.type : 'prio-0',
  });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("")
    if(this.item) {
      this.prioForm.reset(this.item.value)
    }
  }

  onSubmit(): void {
    const prio = this.prioForm.value
    if(this.item) {
      this.prioChangedEvent.next({index: this.item.index, value: prio})
    } else {
      this.prioNewEvent.next(prio)
    }
    this.prioForm.reset();
  }

}
