import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

import { Resolve } from '@angular/router'
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Section, SectionAdminService } from '../section-admin/section-admin.service';

export class Business {
  name: string = "";
  description: string = "";
  id: string = "";
  sections: string[] = [];
  uid: string = "";
  toObj() {
    return {
      name: this.name,
      description: this.description,
      sections: this.sections,
      uid: this.uid
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BusinessAdminService {
  _businesses: any[] = []
  onBusinessChanged: Subject<any> = new Subject()

  constructor(private store: AngularFirestore, private section_serice: SectionAdminService) {
    this.store.collectionGroup('business').valueChanges({idField: 'id'}).subscribe(items  => {
      this._businesses = items
      this.onBusinessChanged.next(items);
    });
  }

  getBusiness(uid: string, create_if_none = true): Promise<Observable<any>> {
    let bizRef =  this.store.collection<any>('business', ref => ref.where('uid', '==', uid));
    return new Promise(async (resolve, reject) => {
      const docExisting = await this.isBusinessExisting(uid)
      if(docExisting) {
        resolve(bizRef.valueChanges({idField: 'id'}));
      } else {
        let biz = new Business();
        biz.uid = uid;
        await this.createBusiness(biz).then((item: Business) => {
          resolve(bizRef.valueChanges({idField: 'id'}));
        });
      }
    })
  }

  isBusinessExisting(uid: string): Promise<boolean> {
    let bizRef =  this.store.collection<any>('business', ref => ref.where('uid', '==', uid));
    return new Promise<boolean>(async (resolve,reject) => {
      bizRef.get().toPromise().then((items: any)=>{
        if(items.empty) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    })
  }

  createBusiness(value: Business): Promise<Business> {
    return new Promise((resolve, reject) => {

      this.store.collection('business').add(value.toObj()).then((bizDoc)=> {

        let section = new Section(bizDoc.id);
        section.name = "Gesamtes Unternehmen";
        section.description = "(Standard Einstellung) Bereich der sich über das gesamte Unternehmen erstreckt."

        value.id = bizDoc.id;
        this.section_serice.createSection(section).then((doc) => {
          value.sections.push(doc.id);
          this.updateBusiness(value).then((item: Business) => {
            resolve(item)
          }).catch(reject)
        }).catch(reject);
      }).catch(reject);
    });

  }

  updateBusiness(value: Business): Promise<any> {
    if(value.id) {
      let req = this.store.collection('business').doc(value.id).set(value.toObj())
      req.catch((reason: any) => {
        console.error(`Somethig went wrong - ${reason}`)
        alert(reason)
      });
      return req;
    } else {
      return this.createBusiness(value);
    }

  }
}
