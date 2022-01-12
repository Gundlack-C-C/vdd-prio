import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pm-health-analytics',
  templateUrl: './pm-health-analytics.component.html',
  styleUrls: ['./pm-health-analytics.component.css']
})
export class PmHealthAnalyticsComponent implements OnInit {

  @Input() data: {[key: string]: any[]} = {}
  weight: number[][] = [
    []
  ]
  constructor() { }

  ngOnInit() {
  }

}
