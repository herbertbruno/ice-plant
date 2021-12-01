import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-record-payment',
  templateUrl: './record-payment.page.html',
  styleUrls: ['./record-payment.page.scss'],
})
export class RecordPaymentPage implements OnInit {
  RecordPaymentForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.RecordPaymentForm = this.formBuilder.group({
      date:[], 
      time:[] ,
      customerName: [],
      paymenttype: [],
      amount:[],
     
    
    })

  }
  RecordPayment () {
if (this.RecordPaymentForm.valid){
  console.log(this.RecordPaymentForm.value);
}else {
  alert("not valid")
}
  }
}
