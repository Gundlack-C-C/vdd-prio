import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FeedbackService, getDictionaryArray, getSectionStatistics } from '../feedback.service';
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
  data: {key: string, val: number, T: string, section: string}[] = []

  constructor(private feedback_servcie: FeedbackService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.pollID) {
      this.loading = true;
      this.loadPoll(this.pollID).finally(()=> {
        this.loading = false
      });
    }
  }

  loadPoll(pollID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.feedback_servcie.getPolls(pollID).subscribe((items: any[]) => {

        this.data = getDictionaryArray(items);

        this.sections = getSectionStatistics(this.data);

        this.dates = Array.from(d3.group(this.data, d => d.T).keys())

        resolve(true)
      });
    });
  }

  get Sympthome() {
    return this.sections["0"]
  }

  get Ursachen() {
    return this.sections["1"]
  }

  get Dates() {
    return this.dates;
  }

}
