import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-agile-manifest',
  templateUrl: './agile-manifest.component.html',
  styleUrls: ['./agile-manifest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgileManifestComponent implements OnInit {

  items = [
    {A: "Individuen und Interaktionen", B: "Prozesse und Werkzeuge", Value: 50},
    {A: "Funktionierende Software", B: "umfassende Dokumentation" , Value: 50},
    {A: "Zusammenarbeit mit dem Kunden", B: "Vertragsverhandlung" , Value: 50},
    {A: "Reagieren auf Veränderung", B: "Befolgen eines Plans" , Value: 50}
  ]


  prio: number[] = [];

  options =  {}

  constructor() { }

  ngOnInit(): void {
    this.updatePlot()
  }

  updatePlot(): void {
    let series = {
      name: "You vs. Team",
      type: 'radar',
      data: [
        { value: this.prio, name: 'You', symbol: 'diamond'},
        { value: [50, 50, 50, 50], name: 'Team'}
      ],
    }
    let radar = {
      shape: 'circle',
      indicator: this.items.map((item) => item.A).map((item) => {
          return {name: item, max: 100}
        })
    }

    this.options =  {
      series: series,
      radar: radar,
      legend: {
        data: ['You', 'Team']
      },
    };

  }

  onPrioChanged(prio: number[]): void {
    this.prio =  prio
    this.updatePlot();
  }

}
