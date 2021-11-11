import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll-detail-view',
  templateUrl: './poll-detail-view.component.html',
  styleUrls: ['./poll-detail-view.component.css']
})
export class PollDetailViewComponent implements OnInit {
  poll_key: string = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.poll_key = params['key'];
    });
  }

}
