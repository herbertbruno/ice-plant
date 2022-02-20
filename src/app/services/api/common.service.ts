import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { ISale } from 'src/app/interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }


  getCollectionList(collectionName:string): Promise<ISale[]> {

    return new Promise((resolve, reject) => {
      let sales: ISale[] = [];

      const snapshot = this.afStore.collection(collectionName).get()
      snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
        let documentsArray = querySnapshot.docs;

        documentsArray.forEach((doc: any) => {
          sales.push(doc.data())
        })
        resolve(sales);
      })
    }) 
  }
}
