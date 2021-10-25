import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-prio',
  templateUrl: './prio.component.html',
  styleUrls: ['./prio.component.css']
})
export class PrioComponent implements OnInit {
  @Input() data: {
    heading: string[] | undefined,
    rows: string[][]
  } | undefined
  @Output() prioChanged= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onPrioChanged(data: any) {
    this.prioChanged.emit(data)
  }

}
