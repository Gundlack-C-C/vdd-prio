import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
