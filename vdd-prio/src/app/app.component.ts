import { Component } from '@angular/core';
import { CSVService } from './csv/csv.service';
import { PollService } from './poll/poll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vdd-prio';
  constructor(private poll_service: PollService) {

  }
}
