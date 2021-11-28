import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-mental-feedback',
  templateUrl: './mental-feedback.component.html',
  styleUrls: ['./mental-feedback.component.css']
})
export class MentalFeedbackComponent implements OnInit {
  @Input() sectionID!: string | null;
  docRef!: DocumentReference<any>;
  constructor(private feedback_service: FeedbackService) { }

  ngOnInit() {
  }

  onSaveFeedback(val: number[][]) {
    if(this.sectionID) {


      if(this.docRef) {
        let doc = {
          value: {0: val[0], 1: val[1]}
        };
        this.docRef.update(doc).catch((reason)=>{
          console.error(`Ouch! Something went wrong! ${reason}`);
        });
      } else {
        let doc = {
          value: {0: val[0], 1: val[1]},
          type: 'mental',
          sessionID: this.sectionID,
          createdAt: null
        };
        this.feedback_service.saveFeedback(doc).then((docRef: any) => {
          this.docRef = docRef;
        })
      }
    }
  }

}
