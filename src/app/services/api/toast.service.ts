import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ICustomer } from 'src/app/interfaces/customer';


@Injectable({
  providedIn: 'root'
})

export class ToastService {
  
  constructor(public toastController: ToastController) { }
  displayToast() {
    this.toastController.create({
      header: 'customersuccessfully saved',
      position: 'bottom',
      color: 'success',
      cssClass: 'toast-custom-class',
      buttons: [
        {
          side: 'end',
          duration:'',
          text: 'Close',
          role: 'cancel',
         
          handler: () => {
            console.log('');
          }
        }
      ]
    }).then((toast) => {
      
      toast.present();
    
    });
  }
}







