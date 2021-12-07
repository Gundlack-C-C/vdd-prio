import { Component, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';


const EXAMPLE_A = [
  {label: 'Meine Tätigkeit', value: [56.5, 82.1, 88.7, 70.1, 53.4, 85.1]},
  {label: 'Beruflicher Stress', value: [51.1, 51.4, 55.1, 53.3, 73.8, 68.7]},
  {label: 'Überforderung', value: [40.1, 62.2, 69.5, 36.4, 45.2, 32.5]},
  {label: 'Schlafstörung', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Angst vor Zukunft', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Antriebslosigkeit', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Sinnhaftigkeit der Aufgabe', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]}
]

const EXAMPLE_B = [
  {label: 'Vorgesetzter', value: [56.5, 82.1, 88.7, 70.1, 53.4, 85.1]},
  {label: 'Kollege', value: [51.1, 51.4, 55.1, 53.3, 73.8, 68.7]},
  {label: 'Team', value: [40.1, 62.2, 69.5, 36.4, 45.2, 32.5]},
  {label: 'Veränderung', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Familie', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Finanzen', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]},
  {label: 'Karriereplanung', value: [25.2, 37.1, 41.2, 18, 33.9, 49.1]}
]

const EXAMPLE_T = ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun']

@Component({
  selector: 'app-mental-timeline',
  templateUrl: './mental-timeline.component.html',
  styleUrls: ['./mental-timeline.component.css']
})
export class MentalTimelineComponent implements OnChanges {
  @Input() Symptome: any[] = [];
  @Input() ursachen: any[] = [];
  @Input() dates: any[] = [];
  @Output() onDateChanged = new EventEmitter<string>()
  prio_A: {label: string, value: number[]}[] = EXAMPLE_A;
  prio_B: {label: string, value: number[]}[] = EXAMPLE_B;
  T: string[] = EXAMPLE_T;
  date: string = EXAMPLE_T[0];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.Symptome || changes.ursachen || changes.dates){
      this.T = this.dates;
      this.date = this.dates[0];

      this.Symptome.forEach((item, i) => {
        this.prio_A[i].value = item;
      })

      this.ursachen.forEach((item, i) => {
        this.prio_B[i].value = item;
      })
    }
  }

  handleTimeLineChnaged(index_T: number) {
    this.date = this.T[index_T];
    this.onDateChanged.emit(this.date);
  }

}
