import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

const label: {[section: string]: string[]} = {
  "0": ['Meine Tätigkeit', 'Beruflicher Stress', 'Überforderung', 'Schlafstörung', 'Angst vor Zukunft', 'Antriebslosigkeit', 'Sinnhaftigkeit der Aufgabe'],
  "1": ['Vorgesetzter', 'Kollege', 'Team', 'Veränderung', 'Familie', 'Finanzen', 'Karriereplanung']
}

@Component({
  selector: 'app-mental-monthly',
  templateUrl: './mental-monthly.component.html',
  styleUrls: ['./mental-monthly.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MentalMonthlyComponent implements OnChanges {
  @Input() data: any[] = []
  @Input() date: string = "";
  dates: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data) {
      this.dates = Array.from(d3.group(this.data, d => d.M).keys())
      if(this.date == "")
        this.date = this.dates[0]
    }
  }

  get Ursachen(): any[] {
    let values = d3.group(this.data.filter((item: {key: string, val: number, T: string, M: string, section: string}) => {
      return item.M == this.date && item.section == "1";
    }), d => d.key);

    return Array.from(values.keys()).map((key: string) => {
      var val = values.get(key);
      return {label: label["1"][Number.parseInt(key)], value: val ? d3.mean(val, d=>d.val) : 0}
    });
  }

  get Sympthome(): any[] {

    let values = d3.group(this.data.filter((item: {key: string, val: number, T: string, M: string, section: string}) => {
      return item.M == this.date && item.section == "0";
    }), d => d.key);

    return Array.from(values.keys()).map((key: string) => {
      var val = values.get(key);
      return {label: label["0"][Number.parseInt(key)], value: val ? d3.mean(val, d=>d.val) : 0}
    });
  }

}
