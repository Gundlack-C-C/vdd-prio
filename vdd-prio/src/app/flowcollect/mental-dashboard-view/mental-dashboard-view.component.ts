import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FeedbackService, getCorrelationArray, getDictionaryArray, getSectionStatistics } from '../feedback.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-mental-dashboard-view',
  templateUrl: './mental-dashboard-view.component.html',
  styleUrls: ['./mental-dashboard-view.component.css']
})
export class MentalDashboardViewComponent implements OnChanges {
  @Input() pollID!: string;

  loading = true;

  dates: any[] = [];
  sections: {[section: string]: any[]} = {}
  correlation: {A: string, B: string, val: number[]}[] = [];
  data: {key: string, val: number, T: string, M: string, section: string}[] = []

  constructor(private feedback_servcie: FeedbackService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.pollID) {
      this.loading = true;
      this.data = [];
      this.sections = {"0": [], "1": []};
      this.dates = [];
      this.loadPoll(this.pollID).finally(()=> {
        this.loading = false
      });
    }
  }

  loadPoll(pollID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.feedback_servcie.getPolls(pollID).subscribe((items: any[]) => {
        if(items.length) {
          this.data = getDictionaryArray(items);
          this.correlation = getCorrelationArray(items);
          this.sections = getSectionStatistics(this.data);
          this.dates = Array.from(d3.group(this.data, d => d.T).keys())
        }
        resolve(true)
      });
    });
  }

  get isDataAvailable() {
    return this.data.length > 0;
  }

  get Symptome() {
    return this.sections["0"]
  }

  get Ursachen() {
    return this.sections["1"]
  }

  get Dates() {
    return this.dates;
  }


  get PollURL() {
    return window.location.origin + "/flowcollect-app/" + this.pollID;
  }

  openPoll() {
    window.open(this.PollURL, '_blank');
  }

  copyURL(id: string) {
    var domElement = document.getElementById(id);
    if(domElement && domElement instanceof HTMLInputElement) {
      domElement.select()
      document.execCommand('copy')
      domElement.setSelectionRange(0,0)
    }
  }
}
