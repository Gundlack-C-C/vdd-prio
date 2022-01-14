import { Component, OnInit } from '@angular/core';
import {HEALTH_WEIGHT, HEALTH_WEIGHT_DESCRIPTION, HEALTH_WEIGHT_SUCCESS, HEALTH_WEIGHT_FAIL} from '../pm-health-model';


function options_barchart_stacked(keys: string[], data: {erfolg: number[], misserfolg: number[]}) {
  const series = keys.map((item, i) => {
    return {
      name: item,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 9,
        formatter: function(d: {data: number}) {
          return `${d.data} %`
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [data.misserfolg[i], data.erfolg[i]],
      tooltip: {
        formatter: function(params: any, ticket: string) {
          const idx = params.seriesIndex;
          let lines = [];
          lines.push(`<b>${params.seriesName}</b>`)
          lines.push(`<small><b>Kritieren</b>: ${HEALTH_WEIGHT_DESCRIPTION[idx+1][1]} </small>`);
          lines.push(`<small><b>Erfolgsfaktor</b>: ${HEALTH_WEIGHT_SUCCESS[idx]} %</small>`);
          lines.push(`<small><b>Risikofaktor</b>: ${HEALTH_WEIGHT_FAIL[idx]} %</small>`);

          return lines.join('<br>')
        }
      }
    }
  });
  return {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    color: ['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'],
    legend: {
      left: '90%',
      bottom: '12%',
      textStyle: {
        fontSize: 8
      }
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '1%',
      top: '1%',
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
      data: ['Risiko', 'Erfolg'],
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
