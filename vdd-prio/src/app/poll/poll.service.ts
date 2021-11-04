import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  polls: any[] = []

  constructor(private store: AngularFirestore) {
    this.store.collectionGroup('polls').valueChanges({idField: 'id'}).subscribe(polls => {
      this.polls = polls
    });
  }

  new_poll(name: string):  Promise<any>{
    return this.store.collection('polls').add({
      "name": name,
      "members": [],
      "items": [],
      "description": []
    }).catch((reason: any) => {
      console.error(`Somethig went wrong - ${reason}`)
      alert(reason)
    })
  }

  delete_poll(key: string): Promise<any>{
    return this.store.collection('polls').doc(key).delete().catch((reason: any) => {
      console.error(`Somethig went wrong - ${reason}`)
      alert(reason)
    })
  }

}
