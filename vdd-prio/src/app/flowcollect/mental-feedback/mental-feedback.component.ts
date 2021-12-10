import { Component, Input, OnInit, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { POLL } from '../poll.service'
import { PollService } from '../poll.service';

@Component({
  selector: 'app-mental-feedback',
  templateUrl: './mental-feedback.component.html',
  styleUrls: ['./mental-feedback.component.css']
})
export class MentalFeedbackComponent implements OnChanges {
  @Input() sectionID!: string | null;
  poll!: POLL | null;
  completed = false;

  constructor(private poll_service: PollService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.sectionID && this.sectionID) {
        this.poll = new POLL();
        this.poll.type = 'mental';
        this.poll.pollID = this.sectionID;
      } else {
        this.poll = null
      }
  }

  handlePrioChanged($event: {completed: boolean, value: number[][]}) {
    this.completed = $event.completed;
    if(this.poll) {
      this.poll.values = $event.value;
      this.onSaveFeedback();
    }
  }

  @HostListener('window:beforeunload')
  onSaveFeedback() {
    if(this.sectionID && this.poll && this.completed) {
      this.poll_service.saveFeedback(this.poll)
    }
  }

}
