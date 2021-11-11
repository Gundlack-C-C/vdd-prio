import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { merge } from 'rxjs';


export class POLL {
  id: string = "";
  name: string = "";
  members: string[] = [];
  items: string[] = [];
  description: string = ""
}


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
    });
  }

  delete_poll(key: string): Promise<any>{
    return this.store.collection('polls').doc(key).delete().catch((reason: any) => {
      console.error(`Somethig went wrong - ${reason}`)
      alert(reason)
    });
  }

  get_poll(key: string): any {
    return this.polls.filter((item: {id: string}) => {
      return item.id == key
    })[0];
  }

  set_poll(poll: POLL): any {
    return this.store.collection('polls').doc(poll.id).set(poll).catch((reason: any) => {
      console.error(`Somethig went wrong - ${reason}`)
      alert(reason)
    });
  }

}
