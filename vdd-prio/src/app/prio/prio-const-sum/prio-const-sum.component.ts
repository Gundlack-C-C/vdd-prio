import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prio-const-sum',
  templateUrl: './prio-const-sum.component.html',
  styleUrls: ['./prio-const-sum.component.css']
})
export class PrioConstSumComponent implements OnInit {
  @Input() maxSum: number = 100
  @Input() items: {label: string, description: string, value: number}[] = []
  @Output() onPrioChanged = new EventEmitter<number[][]>();


  prioForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {

  }

  get SUM(): number {
    const sum = (previousValue: number, currentValue: number) => previousValue + currentValue;
    return this.items.map((item) => item.value).reduce(sum)
  }

  ngOnInit() {
    let group: {[key: string]: number} =  {};
    this.items.forEach((item,i: number) => {
      group['prio-' + i] = 0
    });
    this.prioForm = this.formBuilder.group(group);
  }

  onSubmit() {
    let prio = this.prioForm.value;
    this.onPrioChanged.next(prio)
  }

}
