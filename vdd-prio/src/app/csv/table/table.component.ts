import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: {
    heading: string[] | undefined,
    rows: string[][]
  } | undefined

  get heading(): string[] {
    return this.data ? (this.data.heading ? this.data.heading : []) : [];
  }

  get rows(): string[][] {
    return this.data ? this.data.rows : []
  }

  constructor() { }

  ngOnInit() {
  }

}
