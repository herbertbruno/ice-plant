import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { ICustomer } from 'src/app/interfaces/customer';


@Injectable({
  providedIn: 'root'
})

export class ToastService {
  
  constructor(public toastController: ToastController,public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth) { }
  displayToast() {
    this.toastController.create({
      header: 'customersuccessfully saved',
      duration: 2000, 
      position: 'bottom',
      color: 'success',
      cssClass: 'toast-custom-class',
    }).then((toast) => {
      
      toast.present();
    
    });
  }
}







