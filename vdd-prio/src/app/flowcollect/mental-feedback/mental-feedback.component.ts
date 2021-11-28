import { Component, Input, OnInit } from '@angular/core';
import { POLL } from '../feedback.service'
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-mental-feedback',
  templateUrl: './mental-feedback.component.html',
  styleUrls: ['./mental-feedback.component.css']
})
export class MentalFeedbackComponent implements OnInit {
  @Input() sectionID!: string | null;
  constructor(private feedback_service: FeedbackService) { }

  ngOnInit() {
  }

  onSaveFeedback(val: number[][]) {
    if(this.sectionID) {
      var poll = new POLL();
      poll.values = val;
      poll.type= 'mental';
      poll.sessionID = this.sectionID;
      this.feedback_service.saveFeedback(poll)
    }
  }

}
