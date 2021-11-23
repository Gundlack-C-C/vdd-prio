import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-prio-series',
  templateUrl: './prio-series.component.html',
  styleUrls: ['./prio-series.component.css']
})
export class PrioSeriesComponent implements AfterViewInit, OnInit, OnChanges  {
  options = {}
  @Input() prio: {label: string, value: number[]}[] = [
    {label: 'Milk Tea', value: [56.5, 82.1, 88.7, 70.1, 53.4, 85.1]},
    {label: 'Matcha Latte', value: [51.1, 51.4, 55.1, 53.3, 73.8, 68.7]},
    {label: 'Cheese Cocoa', value: [40.1, 62.2, 69.5, 36.4, 45.2, 32.5]},
    {label: 'Walnut Brownie', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]}
  ]

  @Input() T: string[] = ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun']

  @ViewChild("myChart")
  myChart!: ElementRef;

  mayEChart: any;

  @Input() date: string =  'Jan';

  data: any[] = []

  constructor() { }
  ngOnInit() {
    this.date = this.T[0];
    let head: (string | number)[] = [];
    head.push('Label')
    head.push(...this.T)
    this.data.push(head)

    this.prio.forEach((item: {label: string, value: number[]}) => {
      let row: (string | number)[] = []
      row.push(item.label)
      row.push(...item.value)
      this.data.push(row)
    });
  }

  ngAfterViewInit() {
    var dom = this.myChart?.nativeElement
    this.mayEChart = echarts.init(dom)

    this.renderChart();

    const mayEChart =  this.mayEChart
    this.mayEChart.on('updateAxisPointer', function (event: any) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        mayEChart.setOption({
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
  }

  onTimelineChanged() {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.date) {
      this.renderChart()
    }
  }

  renderChart() {
    const series_template = {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' }
    }

    const pie_template =  {
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
        itemName: 'Label',
        value: this.date,
        tooltip: this.date
      }
    }

    var series: any[] = this.prio.map(()=> {
      return series_template
    });

    series.push(pie_template)

    this.options = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: this.data
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: series
    };

    this.mayEChart.setOption(this.options);
  }

}
