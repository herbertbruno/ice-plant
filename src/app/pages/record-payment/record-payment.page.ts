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
  recordPaymentForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }
  submited: boolean = false;

  ngOnInit() {
    this.recordPaymentForm = this.formBuilder.group({
      date:['', [Validators.required]], 
      time:['', [Validators.required]],
      customerName:['', [Validators.required]],
      paymenttype:['', [Validators.required]],
      amount:['', [Validators.required]],
     
    
    })

  }
  recordPayment () {
    console.log("submit called");
    this.submited = true;
    console.log(this.submited)
    console.log(this.recordPaymentForm.value);
  }
}
