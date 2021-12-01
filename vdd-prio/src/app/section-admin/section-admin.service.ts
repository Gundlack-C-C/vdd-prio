import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { UUID } from 'angular2-uuid';

export class Budget {
  angebotsId: string = "";
  validFrom: string = "";
  validTill: string = "";
  ammountTotal: number = 0;
  ammount: number = 0;

  toObj() {
    return {
      angebotsId: this.angebotsId,
      validFrom: this.validFrom,
      validTill: this.validTill,
      ammountTotal: this.ammountTotal,
      ammount: this.ammount

    }
  }
}

export class Section {
  name: string = "";
  description: string = "";
  businessID: string = "";
  id: string = "";
  budget: string[] = [];
  pollID: string =""

  constructor(businessID: string) {
    this.businessID = businessID;
    this.pollID = UUID.UUID()
  }

  get pollURL(): string {
    return window.location.host + this.pollID
  }

  fromObj(value: Section) {
    this.name = value.name;
    this.description = value.description;
    this.businessID = value.businessID;
    this.id = value.id;
    this.budget = value.budget;
    this.businessID = value.businessID;
    this.pollID = value.pollID;
    return this;
  }

  toObj() {
    return {
      name: this.name,
      description: this.description,
      businessID: this.businessID,
      pollID: this.pollID
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class SectionAdminService {
  private sectionCollection: AngularFirestoreCollection<Section> | null = null;
  items: Observable<Section[]> | null = null;
  listener: Subscription | null = null
  private _sections: any[] = []
  _businessID: string = ""


  onBusinessChanged: Subject<any> = new Subject()

  constructor(private store: AngularFirestore) {
  }

  getSection(sectionID: string): Promise<Section | null> {
    return new Promise(async (resolve, reject) => {
      this.store.collection<Section>('sections').doc(sectionID).get().toPromise().then((res: any)=>{
        if(res.exists) {
          resolve(res.data());
        } else {
          reject(`Section does not exist! ${sectionID}`)
        }

      }).catch((reason)=> reject(reason));
    })
  }

  getSectionsFromBiz(businessID: string): Promise<Section[]> {
    return new Promise((resolve, reject) => {
      if(businessID !== this._businessID) {
        this._businessID = businessID;
        this.sectionCollection = this.store.collection<Section>('sections', ref => ref.where('businessID', '==', businessID));
        this.items = this.sectionCollection.valueChanges({ idField: 'id' });

        let check = setTimeout(()=>{
          reject("NoSections have been returned from DataBase")
          alert("Business without section!")
        }, 2000)

        this.listener?.unsubscribe();
        this.listener = this.items.subscribe((items: Section[])=>{
          this._sections = items.map((val)=> {
            return new Section("").fromObj(val)
          });
          clearTimeout(check)
          resolve(this._sections)
        })

      } else {
        resolve(this._sections)
      }
    })


  }

  createSection(value: Section): Promise<DocumentReference<any>> {
    return this.store.collection('sections').add(value.toObj())
  }

  updateSection(value: Section): Promise<any> {
    if(value.id) {
      return this.store.collection('sections').doc(value.id).set(value).catch((reason: any) => {
        console.error(`Somethig went wrong - ${reason}`)
        alert(reason)
      });
    } else {
      return this.createSection(value);
    }
  }
}
