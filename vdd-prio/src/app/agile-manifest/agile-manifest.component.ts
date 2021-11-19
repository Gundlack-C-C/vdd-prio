import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-agile-manifest',
  templateUrl: './agile-manifest.component.html',
  styleUrls: ['./agile-manifest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgileManifestComponent implements OnInit {

  items = [
    {A: "Individuen und Interaktionen", B: "Prozesse und Werkzeuge", Value: 50, Description: ""},
    {A: "Funktionierende Software", B: "umfassende Dokumentation" , Value: 50, Description: ""},
    {A: "Zusammenarbeit mit dem Kunden", B: "Vertragsverhandlung" , Value: 50, Description: ""},
    {A: "Reagieren auf Veränderung", B: "Befolgen eines Plans" , Value: 50, Description: ""}
  ]


  prio: number[] = [];

  options =  {}

  constructor() {
    let root ="<small>Wir erschließen bessere Wege, Software zu entwickeln, \
    indem wir es selbst tun und anderen dabei helfen. \
    Durch diese Tätigkeit haben wir diese Werte zu schätzen gelernt:</small>"

    this.items[0].Description = `${root} <hr> <div align="center">**Individuen und Interaktionen**<br>mehr als<br>**Prozesse und Werkzeuge**</div>`
    this.items[1].Description = `${root} <hr> <div align="center">**Funktionierende Software**<br>mehr als<br>**Umfassende Dokumentation**</div>`
    this.items[2].Description = `${root} <hr> <div align="center">**Zusammenarbeit mit dem Kunden**<br>mehr als<br>**Vertragsverhandlungen**</div>`
    this.items[3].Description = `${root} <hr> <div align="center">**Reagieren auf Veränderungen**<br>mehr als<br>**Befolgen eines Plans**</div>`
  }

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
