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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const prio = this.agileForm.value
  }


}
