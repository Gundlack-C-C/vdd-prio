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

export function getCorrelationArray(items: any[]): {A: string, B: string, val: number[], M: string}[]{
  let data: {A: string, B: string, val: number[], M: string}[] = []
  items.forEach((item: {createdAt: any, values: {[key: string]: number[]}}) => {
    const A = item.values["1"];
    const B = item.values["2"];
    const M = getMonthOnly(new Date(item.createdAt.toMillis()))
    A.forEach((val_A: number, i: number) => {
      B.forEach((val_b: number, j: number) => {
        data.push({A: i.toString(), B: j.toString(), val: [val_A, val_b], M: M })
      });

    })
  });
  return data;
}

export function getSectionStatistics(items: {key: string, val: number, T: string, M: string, section: string}[]): {key: string, T: string[], values: {key: string, values: any[]}[]}[] {
  let section_group = d3.group(items, d => d.section)
  let statistics: {key: string, T: string[], values: {key: string, values: any[]}[]}[] = [];

  // Calculate for Each Section
  section_group.forEach((section_items, key_section)=>{
    let stats: {key: string, values: any[]} [] = [];
    let dates: string[] = [];
    //Calculate for Each Category
    d3.group(section_items, d => d.key, d=>d.T).forEach((feature, key) => {
      let key_stats: any= [];


      //Sort by Date
      let data = Array.from(feature).map((item)=> {
        return {key: item[0], val: item[1]}
      }).sort((a, b) => {
        return new Date(a.key).getTime() - new Date(b.key).getTime()
      });

      if(dates.length == 0)
        dates = data.map((item)=> item.key)

      data.map((item)=> item.val).forEach((val, i) => {
          let med = Number(d3.mean(val, d => d.val)).toFixed(1);
          key_stats.push(med ? med.toString() : "0");
      })
      stats.push({key: key, values: key_stats})
    });

    statistics.push({key: key_section, T: dates, values: stats});
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
export class PollService {

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
