import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

const label: {[section: string]: string[]} = {
  "0": ['Meine Tätigkeit', 'Beruflicher Stress', 'Überforderung', 'Schlafstörung', 'Angst vor Zukunft', 'Antriebslosigkeit', 'Sinnhaftigkeit der Aufgabe'],
  "1": ['Vorgesetzter', 'Kollege', 'Team', 'Veränderung', 'Familie', 'Finanzen', 'Karriereplanung']
}


@Component({
  selector: 'app-mental-correlation-scatter',
  templateUrl: './mental-correlation-scatter.component.html',
  styleUrls: ['./mental-correlation-scatter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MentalCorrelationScatterComponent  {
  @Input() correlation: {[key: string]: {[key: string]: number[][]}} = {}
  constructor() { }

  getLabelSymptome(index: string): string {
    return label["0"][Number.parseInt(index)];
  }

  getLabelUrsachen(index: string): string {
    return label["1"][Number.parseInt(index)];
  }

}
