import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';

import { ISale } from 'src/app/interfaces/sale';


@Injectable({
  providedIn: 'root'
})

export class SaleService {
  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }


  async getSaleList() {
    let sale: ISale[] = [];

    const snapshot = await this.afStore.collection('sale').get()
    snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
      let documentsArray = querySnapshot.docs;

      documentsArray.forEach((doc: any) => {
        sale.push(doc.data())
      })
    })
    return sale;

  }
  async createNewSale(sale: ISale) {
    console.log(sale);
    // db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})//
    //send to firebase

    const snapshot = await this.afStore.collection('sale').doc().set(sale, { merge: true });

    console.log();

  }
  editsale() {
  }


}

