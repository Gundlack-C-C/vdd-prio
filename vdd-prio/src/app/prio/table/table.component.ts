import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-prio',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: {
    heading: string[] | undefined,
    rows: string[][]
  } = {
    heading: [],
    rows: []
  }

  @Output() dataChangedEvent= new EventEmitter<any>();

  get heading(): string[] {
    return this.data ? (this.data.heading ? this.data.heading : []) : [];
  }

  get rows(): string[][] {
    return this.data ? this.data.rows : []
  }

  constructor() { }

  ngOnInit() {
  }

  valueChanged(event: any, row: number, col: number) {
    if(event && event.target) {
      var val = event.target.value;
      this.data.rows[row][col]=val;
      console.log(event.currentTarget.value);
      this.dataChangedEvent.emit(this.data)
    }
  }

}
