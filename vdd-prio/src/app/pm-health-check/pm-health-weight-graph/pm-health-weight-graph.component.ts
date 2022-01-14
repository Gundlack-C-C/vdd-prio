import { Component, OnInit } from '@angular/core';
import {HEALTH_WEIGHT} from '../pm-health-model';


function options_barchart_stacked(keys: string[], data: {erfolg: number[], misserfolg: number[]}) {
  const series = keys.map((item, i) => {
    return {
      name: item,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 8,
        formatter: function(d: {data: number}) {
          return `${d.data} %`
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [data.misserfolg[i], data.erfolg[i]]
    }
  });
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: "{value} %"
      }
    },
    yAxis: {
      type: 'category',
      data: ['Misserfolg', 'Erfolg'],
      axisLabel: {
        fontSize: 20,
        color: function(value: any, index: number) {
          if (value == "Erfolg") {
              return '#198754';
          }
          else {
              return '#ffc107';
          }
        }
      }
    },
    series: series
  };
}

@Component({
  selector: 'app-pm-health-weight-graph',
  templateUrl: './pm-health-weight-graph.component.html',
  styleUrls: ['./pm-health-weight-graph.component.css']
})
export class PmHealthWeightGraphComponent implements OnInit {
  options = {}

  get data_keys() {
    return HEALTH_WEIGHT.map((data: any[]) => {
      return data[0];
    }).slice(1, HEALTH_WEIGHT.length)
  }
  get data_erfolg() {
    return HEALTH_WEIGHT.map((data: any[]) => {
      return data[1];
    }).slice(1, HEALTH_WEIGHT.length)
  }

  get data_misserfolg() {
    return HEALTH_WEIGHT.map((data: any[]) => {
      return data[2];
    }).slice(1, HEALTH_WEIGHT.length)
  }


  constructor() {
    this.options = this.options = options_barchart_stacked(this.data_keys, {erfolg: this.data_erfolg, misserfolg: this.data_misserfolg})
  }

  ngOnInit() {
  }

}
