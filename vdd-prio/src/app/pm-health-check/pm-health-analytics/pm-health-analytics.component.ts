import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {HEALTH_WEIGHT, HEALTH_WEIGHT_KEYS, HEALTH_WEIGHT_FAIL, HEALTH_WEIGHT_SUCCESS, HEALTH_WEIGHT_DESCRIPTION} from '../pm-health-model'

@Component({
  selector: 'app-pm-health-analytics',
  templateUrl: './pm-health-analytics.component.html',
  styleUrls: ['./pm-health-analytics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PmHealthAnalyticsComponent implements OnChanges {

  @Input() data: {[key: string]: any[]} = {};
  data_raw: any[][] = [];
  data_score: number[] = [0,0];

  idx_improve: number[] = []
  idx_fix: number[] = [];

  weight = HEALTH_WEIGHT;
  range: number[] = [400, 400]

  constructor() {
    this.idx_improve = HEALTH_WEIGHT_SUCCESS.map((weight, idx) => {
      return [weight, idx]
    }).sort((a, b) => b[0] - a[0]).map((item)=> {return item[1]});

    this.idx_fix = HEALTH_WEIGHT_FAIL.map((weight, idx) => {
      return [weight, idx]
    }).sort((a, b) => b[0] - a[0]).map((item)=> {return item[1]});
  }

  get DATA_SUCCESS_SORTED() {
    return [this.data_raw[0] , ...this.data_raw.slice(1, this.data_raw.length).sort((a, b) => {
      return a[1] - b[1]
    })];
  }

  get IMPROVE_IDX(): number[] {
    return this.idx_improve;
  }

  get AVOID_IDX(): number[] {
    return this.idx_fix;
  }

  getDescription(idx: number) {
    return HEALTH_WEIGHT_DESCRIPTION[idx+1]
  }

  get SUM_SUCCESS(): number  {
    return this.data_score[0]
  };

  get SUM_FAIL(): number  {
    return this.data_score[1]
  };

  get value(): number[] {
     return HEALTH_WEIGHT_KEYS.map((key, i) => {
      return this.data[key][3];
     });
  }

  getScore(idx:number) {
    const key = HEALTH_WEIGHT_KEYS[idx];
    return this.data[key][3]
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data_raw = [];
    this.data_raw.push(HEALTH_WEIGHT[0]);
    HEALTH_WEIGHT_KEYS.forEach((key, i)=>{
      const val: number= this.data[key][3];
      console.log(this.data[key])
      this.data_raw.push([
        HEALTH_WEIGHT[i+1][0],
        val*HEALTH_WEIGHT_SUCCESS[i],
        (6-val)*HEALTH_WEIGHT_FAIL[i]
      ])
    });

    this.data_score[0] = this.data_raw.slice(1, this.data_raw.length).reduce((sum, current) => sum + current[1], 0) - 100
    this.data_score[1] = this.data_raw.slice(1, this.data_raw.length).reduce((sum, current) => sum + current[2], 0) - 100

    this.idx_improve = this.data_raw.slice(1, this.data_raw.length).map((raw, idx) => {
      const max_val = 5*HEALTH_WEIGHT_SUCCESS[idx];
      return [max_val-raw[1], idx]
    }).sort((a, b) => b[0] - a[0]).map((item)=> {return item[1]});

    this.idx_fix = this.data_raw.slice(1, this.data_raw.length).map((raw, idx) => {
      return [raw[2], idx]
    }).sort((a, b) => b[0] - a[0]).map((item)=> {return item[1]});
  }

}
