import { Component, Input, OnInit } from '@angular/core';
import { Prio } from 'src/app/prio/prio-edit-form/prio-edit-form.component';

@Component({
  selector: 'app-prio-barchart',
  templateUrl: './prio-barchart.component.html',
  styleUrls: ['./prio-barchart.component.css']
})
export class PrioBarchartComponent implements OnInit {
  @Input() prio: {label: string, value: number}[] = []
  options = {}

  constructor() { }

  ngOnInit() {
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
          type: 'value'
        }
      ],
      series: series
    };
  }
}
