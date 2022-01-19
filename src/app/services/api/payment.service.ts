import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';

import { IPayment } from 'src/app/interfaces/payment';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }


  async getPaymentList() {
    let payment: IPayment[]=[];

    const snapshot = await this.afStore.collection('payment').get()
    snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
      let documentsArray = querySnapshot.docs;

      documentsArray.forEach((doc: any) => {
        payment.push(doc.data())
      })
    })
    return payment;

  }
  async createNewpayment(payment: IPayment) {  
    //send to firebase 
    const snapshot = await this.afStore.collection('payment').doc().set(payment, { merge: true });  
    return snapshot;

  }
  editpayment() {
  }


}
