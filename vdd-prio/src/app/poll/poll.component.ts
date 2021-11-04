import { Component, OnInit } from '@angular/core';
import { PollService } from './poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  new_poll_name = ""
  constructor(private polls: PollService) { }

  ngOnInit() {
  }

}
