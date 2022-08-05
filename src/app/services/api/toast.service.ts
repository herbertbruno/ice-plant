import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ISale } from 'src/app/interfaces/sale';


@Injectable({
  providedIn: 'root'
})

export class ToastService {
  
  constructor(public toastController: ToastController) { }
  displayToast() {
    this.toastController.create({
      header: 'salesuccessfully saved',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      cssClass: 'toast-custom-class',
      
    }).then((toast) => {
      
      toast.present();
    
    });
  }
}