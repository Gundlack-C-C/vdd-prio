import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mental-feedback-app',
  templateUrl: './mental-feedback-app.component.html',
  styleUrls: ['./mental-feedback-app.component.css']
})
export class MentalFeedbackAppComponent implements OnInit {
  private sectionID: string | null = null
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params)
      if(params.sectionID) {
        this.sectionID = params.sectionID
      }
    });
  }

  ngOnInit() {
  }

}
