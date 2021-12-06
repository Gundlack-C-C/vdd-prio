import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import firebase from "firebase/app";
import { Observable } from 'rxjs';
import * as d3 from 'd3';

export function getDateOnly(T: Date) {
  T.setMilliseconds(0);
  T.setSeconds(0);
  T.setMinutes(0);
  T.setHours(0)
  return T;
}

const monthNames = ["Jannuar", "Februar", "März", "April", "Mai", "Juni",
  "Julie", "August", "September", "Oktober", "November", "Dezember"
];

export function getMonthOnly(T: Date) {
  return `${monthNames[T.getUTCMonth()]}-${T.getUTCFullYear()}`
}


export function getDictionaryArray(items: any[]) {
  let data: {key: string, val: number, T: string, M: string, section: string}[] = []
  items.forEach((item: {createdAt: any, values: {[key: string]: number[]}}) => {
    let T = getDateOnly(new Date(item.createdAt.toMillis())).toDateString();
    let M = getMonthOnly(new Date(item.createdAt.toMillis()));
    Object.values(item.values).forEach((values, section) => {
        values.forEach((val, i)=>{
          data.push({key: i.toString(),val: val, T: T, M: M, section: section.toString() })
        });
    });
  });
  return data;
}

export function getSectionStatistics(items: {key: string, val: number, T: string, M: string, section: string}[], d3_format=false) {
  let section_group = d3.group(items, d => d.section)
  let statistics: {[section: string]: any[]} = {};
  section_group.forEach((item, section)=>{
    let stats: any[][] = [];

    if(d3_format)
      stats.push(['key'].concat(...d3.group(item, d=> d.T).keys()))

    d3.group(item, d => d.key, d=>d.T).forEach((item_key, key) => {
      let key_stats = [];

      if(d3_format)
        key_stats.push(key);

      item_key.forEach((item_T, T) => {
        let med = d3.median(item_T, d=>d.val)
        key_stats.push(med ? med.toString() : "0")
      })
      stats.push(key_stats)
    });

    statistics[section] = stats;
  });
  return statistics;
}

export class POLL {
  values: number[][] = [];
  type: string = "";
  pollID: string = ""
}

export class POLLSTAT {
  T: number[] = [];
  values: number[][][] = [];
  type: string = "";
  pollID: string = "";
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

  getPolls(id: string): Observable<any> {
    let polls =  this.store.collection<any>('polls', ref => ref.where('pollID', '==', id));
    return polls.valueChanges();
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
      pollID: val.pollID,
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
