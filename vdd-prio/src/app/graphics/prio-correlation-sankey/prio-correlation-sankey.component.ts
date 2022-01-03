import { AfterViewInit, Component, ElementRef, Input, OnChanges, Output, SimpleChanges, ViewChild, EventEmitter} from '@angular/core';
import * as echarts from 'echarts';

const DATA_EXMPLE = [
  { name: 'a' },
  { name: 'b' },
  { name: 'a1'},
  { name: 'a2' },
  { name: 'b1'},
  { name: 'c' }
]

const LINK_EXMPLE =
  [
    {
      source: 'a',
      target: 'a1',
      value: 5
    },
    {
      source: 'a',
      target: 'a2',
      value: 3
    },
    {
      source: 'b',
      target: 'b1',
      value: 8
    },
    {
      source: 'a',
      target: 'b1',
      value: 3
    },
    {
      source: 'b1',
      target: 'a1',
      value: 1
    },
    {
      source: 'b1',
      target: 'c',
      value: 2
    }
  ]

@Component({
  selector: 'app-prio-correlation-sankey',
  templateUrl: './prio-correlation-sankey.component.html',
  styleUrls: ['./prio-correlation-sankey.component.css']
})
export class PrioCorrelationSankeyComponent implements OnChanges, AfterViewInit {
  @Input() links: {source: string, target: string, value: number}[] = LINK_EXMPLE;
  @Input() data: {name: string}[] = DATA_EXMPLE;
  @Input() formatter: any = '{b}<br/>Value: <b>{c}</b>'
  @Output() onEdgeClicked = new EventEmitter();
  @Output() onNodeClicked = new EventEmitter();

  options = {}

  @ViewChild("myChart") myChart!: ElementRef;
  mayEChart: any;

  constructor() {
    this.render()
  }

  ngAfterViewInit() {
    var dom = this.myChart?.nativeElement
    this.mayEChart = echarts.init(dom)
    var that = this;
    this.mayEChart.on('click', function(params: any) {
      const data = params.data;
      const type = params.dataType;
      if(type=='edge') {
        that.onEdgeClicked.emit(data);
      } else {
        that.onNodeClicked.emit(data);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.data) {
      this.render()
    }
  }

  render() {
    this.options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: this.formatter
      },
      series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.7
        },
        nodeAlign: 'left',
        data: this.data,
        links: this.links
      }
    };
  }
}
