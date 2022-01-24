import { Component, OnInit } from '@angular/core';
import {IPayment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/api/payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.page.html',
  styleUrls: ['./list-payment.page.scss'],
})
export class ListPaymentPage implements OnInit {
  payments:IPayment [];
  waitingFlag: boolean;
 
 
  constructor(private paymentService:PaymentService) { }

  ngOnInit() {
    this.waitingFlag=true;
    this. paymentService.getPaymentList().then(cloudPaymentsData => {
      this.payments = cloudPaymentsData;
      this.waitingFlag= false;
    })
    // this. payments= [
    //   {payment_date:"20-028-2021",payment_amount:"30"},
    //   {payment_date:"23-028-2021",payment_amount:"40"},
    //   {payment_date:"24-028-2021",payment_amount:"80"},
    //   {payment_date:"21-028-2021",payment_amount:"50"},
    // ];
  }

}
