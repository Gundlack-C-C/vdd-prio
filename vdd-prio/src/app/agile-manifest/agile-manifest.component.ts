import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agile-manifest',
  templateUrl: './agile-manifest.component.html',
  styleUrls: ['./agile-manifest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgileManifestComponent implements OnInit {
  items = [
    {A: "Individuen und Interaktionen", B: "Prozesse und Werkzeuge"},
    {A: "Funktionierende Software", B: "umfassende Dokumentation"},
    {A: "Zusammenarbeit mit dem Kunden", B: "Vertragsverhandlung"},
    {A: "Reagieren auf Veränderung", B: "Befolgen eines Plans"}
  ]

  agileForm = this.formBuilder.group({
    'agile-0': 50,
    'agile-1': 50,
    'agile-2': 50,
    'agile-3': 50
  });

  prio: number[] = [];

  options =  {}

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit(): void {
    this.prio =  Object.values(this.agileForm.value)
    this.updatePlot();
  }

}
