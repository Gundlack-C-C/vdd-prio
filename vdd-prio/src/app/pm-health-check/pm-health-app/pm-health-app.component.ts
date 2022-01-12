import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PmHealthFormComponent } from '../pm-health-form/pm-health-form.component';

@Component({
  selector: 'app-pm-health-app',
  templateUrl: './pm-health-app.component.html',
  styleUrls: ['./pm-health-app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PmHealthAppComponent implements OnInit {
  page: number = 1
  pages: number[] = [1, 2, 3];
  formLabal: any[] = ['Key', 'Erfolg', 'Misserfolg']
  formData: {[key: string]: any[]} = {
    knowhow: ['Knowhow', 17.5, 10],
    communication: ['Kommunikation', 17, 15],
    goals: ['Ziele', 13.5, 12],
    planning: ['Projektplanung', 9, 7.75],
    pmexp: ['Projektmanagement', 8.5, 6.5],
    resources: ['Ressourcen', 8, 9],
    pmmethod: ['Methodik', 6.5, 8],
    stakeholdermgmt: ['Stakeholder Management', 5.5, 5.75],
    komplexity: ['Techn. Anforderungen', 2.5, 5.75],
    support: ['Commitment', 7, 8.5],
    conflict: ['Konflikte', 5, 11.75]
  };
  @ViewChild(PmHealthFormComponent) form!: PmHealthFormComponent;

  constructor() { }

  ngOnInit() {
  }

  set Page(value: number) {
    if(value == 3) {
      console.log(this.form.VALUE);
      const data: {[key: string]: number} = this.form.VALUE;
      this.formData['knowhow'] = ['KnowHow', 'Qualifizierte Mitarbeiter', 'Mangel an qualifizierten Mitarbeitern', data['knowhow']];
      this.formData['communication'] = ['Kommunikation', 'Gute Kommunikation', 'Schlechte Kommunikation', data['communication']];
      this.formData['goals'] = ['Ziele', 'Klare Anforderungen und Ziele', 'Unklare Anforderungen und Ziele', data['goals']];
      this.formData['planning'] = ['Projektplanung', 'Ausreichend Projektplanung', 'Unzureichende Projektplanung', data['planning']];
      this.formData['pmexp'] = ['Projektmanagement', 'Projekmanagement-Erfahrung auf Leitungsebene', 'Fehlende Projektmanagement-Erfahrung auf Leitungsebene', data['pmexp']];
      this.formData['resources'] = ['Ressourcen', 'Ausreichend Ressourcen bei Projektstart', 'Fehlende Ressourcen bei Projektstart', data['resources']];
      this.formData['pmmethod'] = ['Methodik', 'Projektmanagment-Methodik', 'Fehlende Projektmanagement-Methodik', data['pmmethod']];
      this.formData['stakeholdermgmt'] = ['Stakeholder Management', 'Stakeholder Management', 'Mangelhaftes Stakeholder Management', data['stakeholdermgmt']];
      this.formData['komplexity'] = ['Techn. Anforderungen', 'Technische Anforderungen', 'Technische Anforderungen zu hoch', data['komplexity']];

      // Support Mean
      const support_data = [data['support_mgmt'], data['support_general']]
      const support = Math.round(support_data.reduce((a,b) => a + b, 0) / support_data.length)
      this.formData['support'] = ['Commitment', 'Unterstützung durch Top Management, Commitment', 'Fehlende Unterstützung durch Top Management, mangelndes Commitment', support];

      // Konficts, Silos, Konflikts Max
      const conflict_data = [data['politiks'], data['silos'], data['internalconfilcts']]
      const conflict = Math.max(...conflict_data)
      this.formData['conflict'] = ['Konflikte', 'Keine Politik, Bereichsegoismen oder interne Kompetenzstreitigkeiten', 'Politik, Bereichsegoismen oder interne Kompetenzsstreitigkeiten', conflict];


      console.log(this.formData);
    }
    this.page = value
  }

  get Page(): number {
    return this.page;
  }

  get PageMax(): number {
    return this.pages[this.pages.length-1]
  }

  get PageMin(): number {
    return this.pages[0];
  }

}
