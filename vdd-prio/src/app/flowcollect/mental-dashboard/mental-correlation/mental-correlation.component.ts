import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as d3 from "d3";

const label: {[section: string]: string[]} = {
  "0": ['Meine Tätigkeit', 'Beruflicher Stress', 'Überforderung', 'Schlafstörung', 'Angst vor Zukunft', 'Antriebslosigkeit', 'Sinnhaftigkeit der Aufgabe'],
  "1": ['Vorgesetzter', 'Kollege', 'Team', 'Veränderung', 'Familie', 'Finanzen', 'Karriereplanung']
}

@Component({
  selector: 'app-mental-correlation',
  templateUrl: './mental-correlation.component.html',
  styleUrls: ['./mental-correlation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MentalCorrelationComponent implements OnChanges {
  @Input() data: {A: string, B: string, val: number[]}[] = []
  correlation: {[key: string]: {[key: string]: number[][]}}= {}
  views = ['overview', 'analyse'];
  view = 'overview';
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data) {
      let values: {[key: string]: any} = {};
      d3.group(this.data, d => d.A, d => d.B).forEach((value: any, key: string)=>{
        let val: any[] = [];
        value.forEach((value: {A: string, B: string, val: number[]}[], key: string) => {
          val.push([key, value.map((item)=> item.val)]);
        })
        values[key] = Object.fromEntries(val);
      });
      this.correlation = values;
    }
  }

  getLabelSymptome(index: string): string {
    return label["0"][Number.parseInt(index)];
  }

  getLabelUrsachen(index: string): string {
    return label["1"][Number.parseInt(index)];
  }
}
