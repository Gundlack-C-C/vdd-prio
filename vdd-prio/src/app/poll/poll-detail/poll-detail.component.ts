import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PollService, POLL} from '../poll.service';


@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnChanges {
  @Input() key: string = ""
  poll: POLL | null = null
  mode="VIEW"
  constructor(private poll_service: PollService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.key.length) {
      this.poll = this.poll_service.get_poll(this.key)
    } else {
      this.poll = null
    }

  }

}
