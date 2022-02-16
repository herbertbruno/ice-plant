import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { IWorker } from 'src/app/interfaces/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,) { }

     getWorkerList():Promise<IWorker[]> {

      return new Promise((resolve, reject) => {
      let workers: IWorker[] = [];

      const snapshot =  this.afStore.collection('worker').get()
      snapshot.subscribe((querySnapshot: QuerySnapshot<DocumentData>) => {
        let documentsArray = querySnapshot.docs;
  
        documentsArray.forEach((doc: any) => {
          workers.push(doc.data())
        })
        resolve(workers) ;
      })
    
    });
  
    }
    async createNewWorker(worker: IWorker) {
      console.log(worker);
      // db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})//
      //send to firebase
  
      const snapshot = await this.afStore.collection('worker').doc().set(worker, { merge: true });
  
      console.log();
  
    }
    editWorker() {
    }
  
  
  }