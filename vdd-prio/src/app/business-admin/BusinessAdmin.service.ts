import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Section, SectionAdminService } from '../section-admin/section-admin.service';

export class Business {
  name: string = "";
  description: string = "";
  id: string = "";
  sections: string[] = [];

  toObj() {
    return {
      name: this.name,
      description: this.description,
      sections: this.sections
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

  createBusiness(value: Business): Promise<string> {
    return new Promise((resolve, reject) => {

      this.store.collection('business').add(value.toObj()).then((bizDoc)=> {

        let section = new Section(bizDoc.id);

        value.id = bizDoc.id;
        this.section_serice.createSection(section).then((doc) => {
          value.sections.push(doc.id);
          this.updateBusiness(value).then(() => resolve(bizDoc.id)).catch(reject)
        }).catch(reject);
      }).catch(reject);
    });

  }

  updateBusiness(value: Business): Promise<any> {
    if(value.id) {
      return this.store.collection('business').doc(value.id).set(value.toObj()).catch((reason: any) => {
        console.error(`Somethig went wrong - ${reason}`)
        alert(reason)
      });
    } else {
      return this.createBusiness(value);
    }

  }
}
