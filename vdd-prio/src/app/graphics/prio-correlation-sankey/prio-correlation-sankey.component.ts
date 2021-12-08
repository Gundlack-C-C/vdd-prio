import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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
export class PrioCorrelationSankeyComponent implements OnChanges {
  @Input() links: {source: string, target: string, value: number}[] = LINK_EXMPLE;
  @Input() data: {name: string}[] = DATA_EXMPLE;
  options = {}
  constructor() {
    this.render()
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
        triggerOn: 'mousemove'
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
