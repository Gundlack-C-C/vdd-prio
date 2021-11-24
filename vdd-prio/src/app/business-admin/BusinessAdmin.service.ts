import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

export class Business {
  name: string = "";
  description: string = "";
  id: string = ""
  toObj() {
    return {
      name: this.name,
      description: this.description
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BusinessAdminService {
  _businesses: any[] = []
  onBusinessChanged: Subject<any> = new Subject()

  constructor(private store: AngularFirestore) {
    this.store.collectionGroup('business').valueChanges({idField: 'id'}).subscribe(items  => {
      this._businesses = items
      this.onBusinessChanged.next(items);
      console.log(items)
    });
  }

  createBusiness(value: Business): Promise<DocumentReference<any>> {
    return this.store.collection('business').add(value.toObj())
  }

  updateBusiness(value: Business): Promise<any> {
    if(value.id) {
      return this.store.collection('business').doc(value.id).set(value).catch((reason: any) => {
        console.error(`Somethig went wrong - ${reason}`)
        alert(reason)
      });
    } else {
      return this.createBusiness(value);
    }

  }

  getBusiness(value: string): Promise<any> {
    return this.store.collection('business').doc(value).get().toPromise().catch((reason: any) => {
      console.error(`Somethig went wrong - ${reason}`)
      alert(reason)
    });
  }

}
