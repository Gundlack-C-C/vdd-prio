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
  @Output() onPrioChanged = new EventEmitter<number[]>();
  @Output() onPrioSubmit = new EventEmitter<number[]>();

  constructor(private formBuilder: FormBuilder) {}

  get SUM(): number {
    const sum = (previousValue: number, currentValue: number) => previousValue + currentValue;
    return this.items.map((item) => item.value).reduce(sum)
  }

  get PRIO(): number[] {
    return this.items.map((item) => {
      return item.value;
    });
  }

  ngOnInit() {
  }

  onValueChanged(index: number, item: any) {
    this.onPrioChanged.next(this.PRIO)
  }

  onSubmit() {
    this.onPrioSubmit.next()
  }

}
