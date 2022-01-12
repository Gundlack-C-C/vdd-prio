import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pm-health-weight-gauge',
  templateUrl: './pm-health-weight-gauge.component.html',
  styleUrls: ['./pm-health-weight-gauge.component.css']
})
export class PmHealthWeightGaugeComponent implements OnChanges {
  @Input() value: number = 0;
  @Input() max: number = 500;
  @Input() min: number = 100;
  @Input() color: string = 'success';
  options = {}
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let color: any[] = []
    if(this.color == 'success') {
      color = [
        [0.25, '#acacac'],
        [0.5, '#6c757d'],
        [0.8, '#a5e4b4'],
        [1, '#28a745']
      ]
    } else {
      color = [
        [0.25, '#acacac'],
        [0.5, '#6c757d'],
        [0.8, '#ffc107'],
        [1, '#dc3545']
      ]
    }
    this.options =  {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 400,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: color
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter: function (value: number) {
              if (value === 0.875) {
                return 'A';
              } else if (value === 0.625) {
                return 'B';
              } else if (value === 0.375) {
                return 'C';
              } else if (value === 0.125) {
                return 'D';
              }
              return '';
            }
          },
          detail: {
            fontSize: 50,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value: number) {
              return value;
            },
            color: 'inherit'
          },
          data: [
            {
              value: this.value
            }
          ]
        }
      ]
    };
  }

}
