import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resolve } from '@angular/router';
import { Subject } from 'rxjs';
import { Prio } from '../prio/prio-edit-form/prio-edit-form.component';


export class POLL {
  id: string = "";
  name: string = "";
  members: string[] = [];
  items: string[] = [];
  description: string = "";
  priority: Prio[] = []
}


@Injectable({
  providedIn: 'root'
})
export class PollService {
  polls: any[] = []
  isReady: Subject<any> = new Subject()
  constructor(private store: AngularFirestore) {
    this.store.collectionGroup('polls').valueChanges({idField: 'id'}).subscribe(polls => {
      this.polls = polls
      this.isReady.next()
    });
  }

  new_poll(name: string):  Promise<any>{
    return this.store.collection('polls').add({
      "name": name,
      "description": "",
      "members": [],
      "items": [],
      "priority": []
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

@Injectable()
export class PollResolver implements Resolve<any> {
  constructor(private poll_service: PollService) {}

  resolve(): Promise<any> | boolean {
    let service = this.poll_service;
    let p = new Promise( function(resolve, reject) {
      service.isReady.subscribe({
        next: () => {
          console.log("ready")
          resolve(true)
        }
      })
    });
    return p
  }
}

