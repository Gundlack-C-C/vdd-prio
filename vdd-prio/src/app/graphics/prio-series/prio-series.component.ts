import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

var myChart: any;

@Component({
  selector: 'app-prio-series',
  templateUrl: './prio-series.component.html',
  styleUrls: ['./prio-series.component.css']
})
export class PrioSeriesComponent implements AfterViewInit  {
  options = {}
  @ViewChild("myChart")
  myChart!: ElementRef;
  date =  1;
  range = ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun']
  constructor() { }

  ngAfterViewInit() {
    var dom = this.myChart?.nativeElement
    var myChart = echarts.init(dom)
    this.options = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', 'Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: this.range[this.date],
              tooltip: this.range[this.date]
            }
          }
        ]
      };

      if(myChart) {
        myChart.on('updateAxisPointer', function (event: any) {
          const xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });

        myChart.setOption(this.options);
      }
  }

  onTimelineChanged($event: any) {
    console.log("TimelineChanged")
  }

}
