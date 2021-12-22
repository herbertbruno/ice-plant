import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';

import { ICustomer } from 'src/app/interfaces/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }


  async getCustomerList() {
    let customers: ICustomer[] = [];

    const snapshot = await this.afStore.collection('customer').get()
    snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
      let documentsArray = querySnapshot.docs;

      documentsArray.forEach((doc: any) => {
        customers.push(doc.data())
      })
    })
    return customers;

  }
  createNewCustomer(customer: ICustomer) {
    //send to firebase
  }
  editCustomer() {
  }


}
