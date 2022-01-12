import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { IExpense } from './expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }
    async getExpenseList() {
      let expense: IExpense[] = [];
  
      const snapshot = await this.afStore.collection('expense').get()
      snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
        let documentsArray = querySnapshot.docs;
  
        documentsArray.forEach((doc: any) => {
          expense.push(doc.data())
        })
      })
      return expense;
  
    }
    async createNewExpense(expense: IExpense) {
      console.log(expense);
      // db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})//
      //send to firebase
  
      const snapshot = await this.afStore.collection('expense').doc().set(expense, { merge: true });
  
      console.log();
  
    }
    editExpense() {
    }
  
  }
