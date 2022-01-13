import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {HEALTH_WEIGHT, HEALTH_WEIGHT_KEYS, HEALTH_WEIGHT_FAIL, HEALTH_WEIGHT_SUCCESS} from '../pm-health-model'

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
  weight = HEALTH_WEIGHT;
  range: number[] = [400, 400]

  constructor() {}

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
  }

}
