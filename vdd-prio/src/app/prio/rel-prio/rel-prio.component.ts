import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rel-prio',
  templateUrl: './rel-prio.component.html',
  styleUrls: ['./rel-prio.component.css']
})
export class RelPrioComponent implements OnInit {
  @Input() data: {
    heading: string[] | undefined,
    rows: string[][]
  } = {
    heading: undefined,
    rows: []
  };
  @Input() row: number = 0;
  @Input() col: number = 0;

  @Output() prioChanged = new EventEmitter<any>();

  options = {
    max: 5
  }

  selected = 0;
  hovered = -1;
  readonly = false

  MIN = {title: "", value: 0}
  MAX = {title: "", value: 0}
  ngOnInit() {
    let colData = this.getSortedCol(this.col)
    let max = colData.pop();
    let min = colData[0]

    let row_max = max ? max[0] : 0;
    let val_max = max ? max[1]: 0
    this.MAX = {title: this.data.rows[row_max][0], value: val_max}

    let row_min = min ? min[0] : 0;
    let val_min = min ? min[1]: 0
    this.MIN = {title: this.data.rows[row_min][0], value: val_min}

    this.selected = Number(this.data.rows[this.row][this.col])
  }

  getSortedCol(col:number): number[][] {
    return this.data ? this.data.rows.map((row, i) => {
      return [i, Number(row[col])];
    }).filter(x => x[1] > 0).sort((a: number[], b: number[]) => {
      return a[1] - b[1]
    }) : []
  }

  get PRIO(): string {
    return this.data.heading ? this.data.heading[this.col] : ""
  }

  get ITEM(): string {
    return this.data.rows[this.row][0]
  }

  constructor() { }
}
