import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export const ProjectHealthForm: {[key:string]: {A: string, B: string, description: string}} = {
  knowhow: {A: 'ausreichend Qualifizierte Mitarbeiter', B: 'Mangel an qualifizierten Mitarbeitern', description: 'Es sind ausreichend Qualifizierte Mitarbeiter vorhanden!'},
  communication: {A: 'Gute Kommunikation', B: 'Schlechte Kommunikation', description: 'Die Kommunkation im Projekt ist gut!'},
  goals: {A: 'Klare Anforderungen und Ziele', B: 'Unklare Anforderungen und Ziele', description: 'Anforderungen und Ziele sind klar formuliert!'},
  planning: {A: 'Ausreichende Planung', B: 'Unzureichende Planung', description: 'Die Projektplanung ist ausreichend!'},
  pmexp: {A: 'Erfahren', B: 'Unerfahren', description: 'Wie ist die Erfahrung des Projektmanagements auf der Leitungsebene?'},
  resources: {A: 'Ausreichend', B: 'Fehlend', description: 'Es sind ausreichend Ressourcen zum Zeitpunkt des Projektstarts vorhanden!'},
  support_mgmt: {A: 'Volle Unterstützung', B: 'Mangelnde Unterstützung', description: 'Das Projekt wird durch das Top Management Unterstützt!'},
  support_general: {A: 'Hohes Commitment', B: 'Geringes Commitment', description: 'Alle Projektbeteiligten zeigen ein hohes Engagement!'},
  pmmethod: {A: 'methodisches Vorgehen', B: 'fehlendes methodisches Vorgehen', description: 'Das Porjektmanagement ist methodisch (btw. folgt etablierten Standards)!'},
  stakeholdermgmt: {A: 'Mangelhaftes Stakeholdermanagement', B: 'Gutes Stakeholdermanagement', description: 'Alle Stakeholder sind im Projekt gut integriert, btw. gut über den Projektstand informiert!'},
  politiks: {A: 'Keine Polititk', B: 'Politik', description: 'Zwischen Projektbeteiligten gibt es keine Politischen Konflikte!'},
  silos: {A: 'Bereichsübergreifende Zusammenarbeit', B: 'Bereichsegoismen vorhanden', description: 'Alle notwendigen Projektbereiche arbeiten zusammen - Es gibt keine Bereichsegoismen!'},
  internalconfilcts: {A: 'Keine Konflikte', B: 'Konflikte vorhanden', description: 'Im Projekt gibt es keine Konflikte (z.B. zwischen Projektbeteiligten)!'},
  komplexity: {A: 'Herausforderung Machbar', B: 'Komplexität zu Hoch', description: 'Die Komplexität des Projektes ist machbar!'}
}

@Component({
  selector: 'app-pm-health-form',
  templateUrl: './pm-health-form.component.html',
  styleUrls: ['./pm-health-form.component.css']
})
export class PmHealthFormComponent implements OnInit {

  projectHealthFormShort = ProjectHealthForm;

  projectHealthFormGroup = Object.fromEntries(Object.entries(this.projectHealthFormShort).map((value)=> {
    return [value[0], 3]
  }))

  pmHeahlForm = this.formBuilder.group(this.projectHealthFormGroup);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  get VALUE(): {[key: string]: number} {
    return this.pmHeahlForm.value;
  }

  onSubmit(): void {
    const status = this.VALUE
    console.log(status)
  }

}
