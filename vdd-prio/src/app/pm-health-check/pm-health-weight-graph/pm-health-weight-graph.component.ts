import { Component, OnInit } from '@angular/core';
import {HEALTH_WEIGHT} from '../pm-health-model';

function options_barchart_polar(dataset: any[]) {
  return {
    tooltip: {},
    dataset: {
      source: dataset
    },
    backgroundColor: '#2c343c',
    title: [
      {
        text: 'Erfolg',
        left: '25%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
          color: '#198754',
          fontSize: 25,
          textShadowBlur: 0.5
        }
      },
      {
        text: 'Misserfolg',
        left: '75%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
          color: '#ffc107',
          fontSize: 25
        }
      },
    ],
    visualMap: {
      show: false,
      min: 5,
      max: 13,
      inRange: {
        colorLightness: [0.8, 0.2]
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Erfolg',
        radius: ['40%', '50%'],
        center: ['25%', '50%'],
        color: '#198754',
        encode: {
          itemName: 'Key',
          value: 'Erfolg'
        }
      },
      {
        type: 'pie',
        name: 'Misserfolg',
        radius: ['40%', '50%'],
        center: ['75%', '50%'],
        color: '#ffc107',
        encode: {
          itemName: 'Key',
          value: 'Misserfolg'
        }
      }
    ]
  };
}
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

function options_barchart(keys: string[], data: {erfolg: number[], misserfolg: number[]}) {
   return {
    title: {
      text: 'GPM - PM Studie 2008'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
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
      boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: "{value} %"
      }
    },
    yAxis: {
      type: 'category',
      data: keys
    },
    series: [
      {
        name: 'Erfolg',
        type: 'bar',
        data: data.erfolg,
        color: '#198754'
      },
      {
        name: 'Misserfolg',
        type: 'bar',
        data: data.misserfolg,
        color: '#ffc107'
      }
    ]
  };
}

@Component({
  selector: 'app-pm-health-weight-graph',
  templateUrl: './pm-health-weight-graph.component.html',
  styleUrls: ['./pm-health-weight-graph.component.css']
})
export class PmHealthWeightGraphComponent implements OnInit {
  options = {}
  mode = 0;
  intervalHandler: number | null = null;

  get data_raw() {
    return HEALTH_WEIGHT;
  }
  get data_keys() {
    return HEALTH_WEIGHT.map((data: any[]) => {
      return data[0];
    }).slice(1, HEALTH_WEIGHT.length)
  }

  set Mode(val: number) {
    this.mode = val;
    if(this.mode == 0) {
      this.options = options_barchart_polar(this.data_raw)
    } else if (this.mode == 1) {
      this.options = options_barchart(this.data_keys, {erfolg: this.data_erfolg, misserfolg: this.data_misserfolg})
    } else {
      this.options = options_barchart_stacked(this.data_keys, {erfolg: this.data_erfolg, misserfolg: this.data_misserfolg})
    }
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
    this.options = options_barchart_polar(this.data_raw)
    this.intervalHandler = window.setInterval(()=> {
      this.Mode = (this.mode + 1) % 3
    }, 10000)
  }

  ngOnInit() {
  }

}
