import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import firebase from "firebase/app";

export class POLL {
  values: number[][] = [];
  type: string = "";
  sessionID: string = ""
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  pollRef: AngularFirestoreCollection<any>;
  docRef!: DocumentReference<any>;
  constructor(private store: AngularFirestore) {
    this.pollRef = this.store.collection('polls');
  }

  saveFeedback(val: POLL): Promise<void | DocumentReference<any>> {
    if(this.docRef) {
      return this.updateFeedback(val);
    }

    let doc = {
      values: {
        1: val.values[0],
        2: val.values[1]
      },
      sessionID: val.sessionID,
      type: val.type,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }

    return this.pollRef.add(doc).then((res: DocumentReference<any>) => {
      this.docRef = res;
    }).catch((reason) => {
      console.error(reason);
      alert(`Ouch! Something went wrong saving your feedback!`)
    });
  }

  updateFeedback(val: POLL) : Promise<any> {
    let doc = {
      values: {
        1: val.values[0],
        2: val.values[1]
      }
    }
    return this.docRef.update(doc).catch((reason) => {
      console.error(reason);
      alert(`Ouch! Something went wrong saving your feedback!`)
    });
  }

}
