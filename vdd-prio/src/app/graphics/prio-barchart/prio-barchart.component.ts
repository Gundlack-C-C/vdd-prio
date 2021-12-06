import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prio-barchart',
  templateUrl: './prio-barchart.component.html',
  styleUrls: ['./prio-barchart.component.css']
})
export class PrioBarchartComponent implements OnChanges {
  @Input() prio: {label: string, value: number}[] = []
  options = {}

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.prio && this.prio.length) {
      if(changes.prio.firstChange) {
        this.renderChart()
      } else if(!changes.prio.firstChange && JSON.stringify(changes.prio.currentValue) != JSON.stringify(changes.prio.previousValue)) {
        this.renderChart()
      }
    }
  }

  renderChart() {
    let xAxis = [
      {
        type: 'category',
        data: this.prio.map((item) => item.label),
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 45,
          fontWeight: 'bold',
          align: 'right',
          verticalAlign: 'middle',
          padding: [0, 10, 0, 0 ],
          overflow: 'truncate',
          width: 150
        }
      }
    ];
    let series = [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: this.prio.map((item) => item.value)
      }
    ];

    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
      },
      xAxis:xAxis,
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 100
        }
      ],
      series: series
    };
  }
}
