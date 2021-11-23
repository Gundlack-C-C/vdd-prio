import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mental-feedback-form',
  templateUrl: './mental-feedback-form.component.html',
  styleUrls: ['./mental-feedback-form.component.css']
})
export class MentalFeedbackFormComponent {
  @Output() onPrioChanged = new EventEmitter<number[][]>();

  items = [
    {label: "**Welche Faktoren** beeinflussen Deine mentale Gesundheit derzeit?", description: "", constSum: 100, items: [
      {label: "Meine Tätigkeit", description: "", value: 0},
      {label: "Beruflicher Stress", description: "", value: 0},
      {label: "Überforderung", description: "", value: 0},
      {label: "Schlafstörung", description: "", value: 0},
      {label: "Angst vor Zukunft", description: "", value: 0},
      {label: "Antriebslosigkeit", description: "", value: 0},
      {label: "Sinnhaftigkeit der Aufgabe", description: "", value: 0},
    ]},
    {label: "Wer oder was verursacht Deine Angst?", description: "Da Ängste häufig mehrere Auslöser haben kannst du per Schieberegler die zutreffenden Akteure für dein Symptom entsprechend einordnen, indem du den Schieberegler je nach Relevanz in Bezug zu deiner Angst einstellst.", constSum: 300, items: [
      {label: "Vorgesetzter", description: "", value: 0},
      {label: "Kollege", description: "", value: 0},
      {label: "Team", description: "", value: 0},
      {label: "Veränderung", description: "", value: 0},
      {label: "Familie", description: "", value: 0},
      {label: "Finanzen", description: "", value: 0},
      {label: "Karriereplanung", description: "", value: 0},
    ]}
  ]
  feedbackForm = this.formBuilder.group({});

  page: number = 0;
  pages: string[] = [
    "Start",
    "A",
    "B",
    "Fertig"
  ]

  prio: number[][] = [[],[]]

  constructor(private formBuilder: FormBuilder) {

  }

  getPrioGraphData(i: number): {label: string; value: number}[] {
    return this.items[i].items.map((item) => {
      return {label: item.label, value: item.value}
    })
  }


  getPageSymbol(index: number) {
    return this.pages[index-1];
  }

  handlePrioChanged(prio: number[], index:number) {
    this.page = index+3;

    prio.forEach((p: number, i: number) => {
      this.items[index].items[i].value = p
    })

    this.prio[index] = prio
  }

}
