import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HEALTH_WEIGHT_DESCRIPTION } from '../pm-health-model'

@Component({
  selector: 'app-pm-health-radar',
  templateUrl: './pm-health-radar.component.html',
  styleUrls: ['./pm-health-radar.component.css']
})
export class PmHealthRadarComponent implements OnChanges {
  @Input() data: number[] = [];
  options = {}
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.options = {
      radar: {
        // shape: 'circle',
        indicator: HEALTH_WEIGHT_DESCRIPTION.slice(1, this.data.length).map((item) => {
          return { name: item[0], max: 5, min: 0 }
        }),
        center: ['50%', '50%'],
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [5, 6]
        },
        radius: window.innerWidth < 500 ? '50%' : '80%'
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [
        {
          name: 'Erfolg',
          type: 'radar',
          data: [
            {
              value: this.data,
              name: 'Ergebnis',
              symbol: 'circle',
              symbolSize: '10',
              zindex: 100,
              tooltip: {
                trigger: 'item'
              },
            },
            {
              value: this.data.map(()=> {return 5}),
              name: 'Good',
              symbol: 'none',
              animation: false,
              lineStyle: {
                type: 'dashed',
                shadowColor: 'green',
                shadowBlur: 20,
                color: 'green',
                opacity: 0.2,
              },
              areaStyle: {
                color: 'green',
                opacity: 0.1
              },
            },
            {
              value: this.data.map(()=> {return 3}),
              name: 'Good',
              symbol: 'none',
              animation: false,
              lineStyle: {
                type: 'dashed',
                shadowColor: 'green',
                shadowBlur: 20,
                color: 'orange',
                opacity: 0.3,
              },
              areaStyle: {
                color: 'orange',
                opacity: 0.1
              },
            },
            {
              value: this.data.map(()=> {return 2}),
              name: 'Warning',
              symbol: 'none',
              animation: false,
              lineStyle: {
                type: 'dashed',
                shadowColor: 'red',
                shadowBlur: 20,
                color: 'red',
                opacity: 0.3
              },
              areaStyle: {
                color: 'red',
                opacity: 0.1
              },
            }
          ]
        }
      ]
    };
  }

}
