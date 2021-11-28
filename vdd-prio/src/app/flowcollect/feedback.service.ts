import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import firebase from "firebase/app";

class Poll {
  values: number[][] = [];
  type: string = "";
  sessionID: string = ""


}
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  pollRef: AngularFirestoreCollection<any>;

  constructor(private store: AngularFirestore) {
    this.pollRef = this.store.collection('polls');
  }

  saveFeedback(val: {value: Object, type: string, sessionID: string, createdAt: firebase.firestore.FieldValue | null}): Promise<void | DocumentReference<any>> {
    val.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    return this.pollRef.add(val).catch((reason) => {
      console.error(reason);
      alert(`Ouch! Something went wrong saving your feedback!`)
    });
  }

}
