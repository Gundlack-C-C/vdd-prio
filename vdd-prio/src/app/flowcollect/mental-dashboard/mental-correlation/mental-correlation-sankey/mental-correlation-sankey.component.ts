import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import * as d3 from "d3";

const label: {[section: string]: string[]} = {
  "0": ['Meine Tätigkeit', 'Beruflicher Stress', 'Überforderung', 'Schlafstörung', 'Angst vor Zukunft', 'Antriebslosigkeit', 'Sinnhaftigkeit der Aufgabe'],
  "1": ['Vorgesetzter', 'Kollege', 'Team', 'Veränderung', 'Familie', 'Finanzen', 'Karriereplanung']
}

export function getCorrelation(data: number[][]) {
  let x = data.map((val) => val[0]);
  let y = data.map((val) => val[1]);
  const mean_x: any = d3.mean(x);
  const mean_y: any = d3.mean(y);

  const cov = d3.sum([x.map((val: number) => val - mean_x), y.map((val: number) => val - mean_y)].map((val: number[]) => val[0]*val[1]))/(x.length -1);

  const std_x: any = d3.deviation(x);
  const std_y: any = d3.deviation(y);

  const cor = cov/(std_x*std_y)
  return cor;
}

@Component({
  selector: 'app-mental-correlation-sankey',
  templateUrl: './mental-correlation-sankey.component.html',
  styleUrls: ['./mental-correlation-sankey.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MentalCorrelationSankeyComponent implements OnChanges {
  @Input() correlation: {[key: string]: {[key: string]: number[][]}} = {};
  test: Object = {};
  links: {source: string, target: string, value: number}[] = [];
  data: {name: string}[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.correlation) {
      let links: {source: string, target: string, value: number}[] = []
      Object.entries(this.correlation).forEach(([key_A, value_A]) => {

        const name_A = label["0"][Number.parseInt(key_A)];
        Object.entries(value_A).forEach(([key_B, value_B]) => {
          const name_B = label["1"][Number.parseInt(key_B)];
          const cor = getCorrelation(value_B)
          if(Math.abs(cor) > 0.05 && cor != Infinity && cor != -Infinity) {
            links.push({
              source: name_A,
              target: name_B,
              value: Math.abs(Number((cor).toFixed(2)))
            });
          }
        });
      })
      this.links = links;
      this.data = [...label["0"].map((val: string)=> {return {name: val}}), ...label["1"].map((val: string)=> {return {name: val}})];
    }
  }

  getLabelSymptome(index: string): string {
    return label["0"][Number.parseInt(index)];
  }

  getLabelUrsachen(index: string): string {
    return label["1"][Number.parseInt(index)];
  }
}
