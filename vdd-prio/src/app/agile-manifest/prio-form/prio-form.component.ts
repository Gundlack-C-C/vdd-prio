import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prio-form',
  templateUrl: './prio-form.component.html',
  styleUrls: ['./prio-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrioFormComponent implements OnInit {
  @Input() items: {A: string, B: string, Value: number, Description: string}[] = []
  @Output() onPrioChanged = new EventEmitter<number[]>();

  prio: number[] = [];
  page = 1;
  agileForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

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
