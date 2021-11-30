import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import * as d3 from 'd3';

function getDateOnly(T: Date) {
  T.setMilliseconds(0);
  T.setSeconds(0);
  T.setMinutes(0);
  T.setHours(0)
  return T;
}


function getDictionaryArray(items: any[]) {
  let data: {key: string, val: number, T: string, section: string}[] = []
  items.forEach((item: {createdAt: any, values: {[key: string]: number[]}}) => {
    let T = getDateOnly(new Date(item.createdAt.toMillis())).toDateString();

    Object.values(item.values).forEach((values, section) => {
        values.forEach((val, i)=>{
          data.push({key: i.toString(),val: val, T: T, section: section.toString() })
        });
    });
  });
  return data;
}

function getSectionStatistics(items: {key: string, val: number, T: string, section: string}[]) {
  let section_group = d3.group(items, d => d.section)
  let statistics: {[section: string]: any[]} = {};
  section_group.forEach((item, section)=>{
    let stats: any[][] = [['key'].concat(...d3.group(item, d=> d.T).keys())]
    d3.group(item, d => d.key, d=>d.T).forEach((item_key, key) => {
      let key_stats = [key];
      item_key.forEach((item_T, T) => {
        let med = d3.median(item_T, d=>d.val)
        key_stats.push(med ? med.toString() : "0")
      })
      stats.push(key_stats)
    });

    statistics[section] = stats;
  });
  return statistics;
}

@Component({
  selector: 'app-business-app',
  templateUrl: './business-app.component.html',
  styleUrls: ['./business-app.component.css']
})
export class BusinessAppComponent implements OnInit {
  polls: string[] = ['test'];
  sections: {[section: string]: any[]} = {}
  data: {key: string, val: number, T: string, section: string}[] = []
  constructor(private feedback_servcie: FeedbackService) {
    this.feedback_servcie.getPolls('test').subscribe((items: any[]) => {

      this.data = getDictionaryArray(items);

      this.sections = getSectionStatistics(this.data);

    });
  }

  ngOnInit() {
  }

}
