import { Component, Input, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-mental-feedback',
  templateUrl: './mental-feedback.component.html',
  styleUrls: ['./mental-feedback.component.css']
})
export class MentalFeedbackComponent implements OnInit {
  @Input() sectionID!: string;
  constructor(private feedback_service: FeedbackService) { }

  ngOnInit() {
  }

  onSaveFeedback(val: number[][]) {
    this.feedback_service.saveFeedback(val, 'mental', this.sectionID)

  }

}
