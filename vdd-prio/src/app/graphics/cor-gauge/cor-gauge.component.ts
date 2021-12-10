import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cor-gauge',
  templateUrl: './cor-gauge.component.html',
  styleUrls: ['./cor-gauge.component.css']
})
export class CorGaugeComponent implements OnChanges {
  @Input() link!: {source: string, target: string, value: number, cor: number}
  options = {}
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.link) {
      this.render();
    }
  }

  render() {
    this.options = {
      legend: {
        padding: 0,
        itemGap: 0,
      },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          },
          min: -1,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#dc3545'],
                [0.35, '#ffc107'],
                [0.5, '#28a745'],
                [0.65, '#28a745'],
                [0.75, '#ffc107'],
                [1, '#dc3545']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-40%'],
            itemStyle: {
              color: 'inherit'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'inherit',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'inherit',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 12,
            distance: 12,
            formatter: function (value: number) {
              return value
            }
          },
          title: {
            offsetCenter: [0, "-120%"],
            color: '#17a2b8',
            fontSize: 20,
            fontWeight: 'bold'
          },
          detail: {
            fontSize: 20,
            offsetCenter: [0, 0],
            valueAnimation: true,
            formatter: function (value: number) {
              const str = Math.abs(value) >= 0.5 ? "Hoch": Math.abs(value) <= 0.3 ? "Gering": "Mittel";
              return `${value}\n${str}`;
            },
            color: 'auto'
          },
          data: [
            {
              value: this.link.cor,
              name: `${this.link.source} -- ${this.link.target}`
            }
          ]
        }
      ]
    }
  }

}
