import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prio-form',
  templateUrl: './prio-form.component.html',
  styleUrls: ['./prio-form.component.css']
})
export class PrioFormComponent implements OnInit {
  @Input() items: {A: string, B: string, Value: number}[] = []
  @Output() onPrioChanged = new EventEmitter<number[]>();

  prio: number[] = [];

  agileForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("items")
    let group: {[key: string]: number} = {}
    this.items.forEach((item, i) => {
      group['agile-' + i] = item.Value;
    })

    this.agileForm = this.formBuilder.group(group)
  }

  onSubmit(): void {
    this.prio =  Object.values(this.agileForm.value)
    this.onPrioChanged.next(this.prio)
  }

}
