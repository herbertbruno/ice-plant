import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IPayment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/api/payment.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-record-payment',
  templateUrl: './record-payment.page.html',
  styleUrls: ['./record-payment.page.scss'],
})
export class RecordPaymentPage implements OnInit {
  recordPaymentForm: FormGroup;
  submited: boolean = false;
  
  
 
  

  constructor(private navCtrl: NavController,private router: Router, private auth: AuthService, public formBuilder: FormBuilder,private paymentService:PaymentService) { }


  ngOnInit() {
    this.recordPaymentForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    })
  }
  recordPayment() {
    this.submited = true;

    console.log(this.recordPaymentForm.valid);
    if (this.recordPaymentForm.valid) {
      let payment: IPayment = this.recordPaymentForm.value;
      this.paymentService.createNewpayment(payment).then(()=>{
        this.navCtrl.navigateBack("/list-payment");
      })
    }
    // console.log("submit called");
    // this.submited = true;
    // console.log(this.submited)
    // console.log(this.recordPaymentForm.value);
  }
}
