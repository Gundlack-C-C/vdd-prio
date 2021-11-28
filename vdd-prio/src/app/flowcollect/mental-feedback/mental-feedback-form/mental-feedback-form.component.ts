import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mental-feedback-form',
  templateUrl: './mental-feedback-form.component.html',
  styleUrls: ['./mental-feedback-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MentalFeedbackFormComponent {
  @Output() onPrioChanged = new EventEmitter<number[][]>();

  @ViewChild('codeInput') input!: ElementRef;

  coachingCode="faa488ab-6758-6c62-1770-b737dc516040"
  items = [
    {
      label: "Faktoren", description: "Welche <ins>**Faktoren**</ins> beeinflussen Deine mentale Gesundheit derzeit?", constSum: 100, items: [
        { label: "Meine Tätigkeit", description: "", value: 0 },
        { label: "Beruflicher Stress", description: "", value: 0 },
        { label: "Überforderung", description: "", value: 0 },
        { label: "Schlafstörung", description: "", value: 0 },
        { label: "Angst vor Zukunft", description: "", value: 0 },
        { label: "Antriebslosigkeit", description: "", value: 0 },
        { label: "Sinnhaftigkeit der Aufgabe", description: "", value: 0 },
      ]
    },
    {
      label: "Verursacher", description: "Wer oder was ist <ins>**Verursacher**</ins> Deiner Angst?<br><small>Da Ängste häufig mehrere Auslöser haben kannst du per Schieberegler die zutreffenden Akteure für dein Symptom entsprechend einordnen.<br>Stelle hierfür den Schieberegler je nach Relevanz in Bezug zu deiner Angst.</small>", constSum: 300, items: [
        { label: "Vorgesetzter", description: "", value: 0 },
        { label: "Kollege", description: "", value: 0 },
        { label: "Team", description: "", value: 0 },
        { label: "Veränderung", description: "", value: 0 },
        { label: "Familie", description: "", value: 0 },
        { label: "Finanzen", description: "", value: 0 },
        { label: "Karriereplanung", description: "", value: 0 },
      ]
    }
  ]

  description = "Sehr geehrter Mitarbeiter,<br><br>\
  Wir legen großen Wert auf <b>Ihre mentale Gesundheit.</b><br><br>\
  Mit FlowCollect® bieten wir Ihnen die Möglichkeit Ihre mentalen Belastungen anonym zu kommunizieren.<br><br>\
  Bei Bedarf stellen wir Ihnen individuelle psychologische <b>Beratung und Coachings</b> zur Verfügung.\
  Unser Unternehmen stellt Ihnen dafür ein entsprechendes Budget zur Verfügung.<br><br> \
  Über FlowCollect® erhalten Sie einen kostenlosen Zugang zu einem Therapeuten oder Coach ihrer Wahl. \
  So können Sie mit professioneller Unterstützung etwas für ihr mentales Wohlbefinden tun und ihren individuellen Konflikt bewältigen.<br>\
  <b>100% Anonym.</b>"
  feedbackForm = this.formBuilder.group({});

  page: number = 0;
  pages: string[] = [
    "Start",
    "A",
    "B",
    "Fertig"
  ]

  prio: number[][] = [[], []]

  constructor(private formBuilder: FormBuilder) {}

  getPrioGraphData(i: number): { label: string; value: number }[] {
    return this.items[i].items.map((item) => {
      return { label: item.label, value: item.value }
    })
  }

  getPageSymbol(index: number) {
    return this.pages[index - 1];
  }

  handlePrioSubmit(prio: number[], index: number) {
    this.page = index + 3;

    this.prio[index] = prio
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  copyCode() {
    var domElement = this.input.nativeElement;
    domElement.select()
    document.execCommand('copy')
    domElement.setSelectionRange(0,0)
    console.log("test")
  }

  openCoaching() {
    window.open("https://www.flowcollect.com/flowcollect-momo/coaching-buchungsassistent/", "_blank")
  }
}
