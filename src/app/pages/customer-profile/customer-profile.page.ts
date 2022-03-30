import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {

  //customerForm: any;
  customerProfileForm: FormGroup;
  submited: boolean = false;
  waitingFlag: boolean;
  
  

  constructor(private navCtrl: NavController,public toastController: ToastController,private router: Router, private auth: AuthService, private customerService: CustomerService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerProfileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      vechicleType: ['', [Validators.required]],
      needRecipt: ['', [Validators.required]],
    })
  }
 
  
  save() {

    this.submited = true;
    console.log(this.customerProfileForm.valid);
    console.log(this.customerProfileForm.value);

    if (this.customerProfileForm.valid) {
      let customer: ICustomer = this.customerProfileForm.value;
      this.customerService.createNewCustomer(customer)
      this.navCtrl.navigateBack("/list-customer");
    }
   
  }
  displayToast() {
    if (this.customerProfileForm.valid) {
      let customer: ICustomer = this.customerProfileForm.value;
      this.customerService.createNewCustomer(customer)
      {
    this.toastController.create({
      header: 'successfully saved',
      position:'bottom',
      color:'success',
      cssClass: 'toast-custom-class',
      buttons: [
         {
          side: 'end',
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
  }}
}}
