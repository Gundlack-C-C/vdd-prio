import { Component, Input, OnInit } from '@angular/core';
import { getMonthOnly } from '../poll.service';
import * as d3 from "d3";

@Component({
  selector: 'app-mental-dashboard',
  templateUrl: './mental-dashboard.component.html',
  styleUrls: ['./mental-dashboard.component.css']
})
export class MentalDashboardComponent implements OnInit {
  @Input() symptome: any[] = [];
  @Input() ursachen: any[] = [];
  @Input() dates: any[] = [];
  @Input() data: any[] = [];
  @Input() correlation: {A: string, B: string, val: number[], M: string}[] = [];

  month: string = ""

  ngOnInit(): void {
    const month = Array.from(d3.group(this.data, d => d.M).keys())
    if(this.month == "")
      this.month = month[month.length -1]
  }

  onDateChanged(date: string) {
    this.month = getMonthOnly(new Date(date));
  }

  onMonthChanged(date: string) {
    this.month = date;
  };
}
