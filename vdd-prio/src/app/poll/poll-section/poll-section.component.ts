import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-poll-section',
  templateUrl: './poll-section.component.html',
  styleUrls: ['./poll-section.component.css']
})
export class PollSectionComponent implements OnInit {
  new_poll_name: string =''
  selected_poll_key: string =''
  constructor(private poll_service: PollService) { }

  ngOnInit() {
  }

  on_new_poll(name: string) {
    this.poll_service.new_poll(name).then((res: {id: string}) => {
        this.selected_poll_key=res.id;
        this.new_poll_name = "";
    })
  }

  on_delete_poll(key: string) {
    this.poll_service.delete_poll(key)
  }

  get POLL_COUNT(): Number {
    return this.poll_service.polls.length
  }

  get POLLS(): {key: string, value: string}[] {
    return this.poll_service.polls.map((item: {id: string, name: string}) => {
        return {key: item.id, value: item.name}
    });
  }
}
