import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Prio } from 'src/app/prio/prio-edit-form/prio-edit-form.component';
import { PollService, POLL} from '../poll.service';


@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnChanges {
  //Input
  @Input() key: string = ""
  //Container
  poll: POLL | null = null

  new_item: string = ""

  //Status
  changed: boolean = false
  saved: boolean = false
  constructor(private poll_service: PollService) { }

  set POLL(value: POLL | null) {
    this.poll = value;

    this.changed = false;
    this.saved = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.key.length) {
      this.POLL = this.poll_service.get_poll(this.key)
    } else {
      this.POLL = null
    }
  }

  onPrioNew(item: Prio) {
    this.poll?.priority.push(item);
    this.changed = true;
  }

  onPriocbhanged(item: {index: number, value: Prio}) {
    if(this.poll?.priority) {
      this.poll.priority[item.index] = item.value
      this.changed = true;
    }
  }

  onNewItem(value: string) {
    this.poll?.items.push(value);
    this.new_item = "";
    this.changed = true;
  }

  onDeleteItem(index: number) {
    if(this.poll != null) {
      this.poll.items = this.poll.items.filter((obj,i)=>{
        return i != index;
      })
      this.changed = true;
    }
  }

  onPollChanged(event: any, field: string, index: number = 0) {
    if(this.poll == null){
      return
    }
    const value = event.target.value;
    if(field === 'name') {
      this.poll.name = value
    } else if(field === 'description') {
      this.poll.description = value
    } else if(field === 'item') {
      this.poll.items[index] = value
    }

    this.changed = true
  }

  onSave() {
    this.saved = true

    if(this.poll) {
      this.poll_service.set_poll(this.poll).then(()=>{
        setTimeout(() => {
          this.saved = false;
          this.changed = false;
        }, 2000);
      })
    }
  }

}
