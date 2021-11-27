import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.page.html',
  styleUrls: ['./list-payment.page.scss'],
})
export class ListPaymentPage implements OnInit {
  payments=[];
  constructor() { }

  ngOnInit() {
    this. payments= [
      {payment_date:"20-028-2021",payment_amount:"30"},
      {payment_date:"23-028-2021",payment_amount:"40"},
      {payment_date:"24-028-2021",payment_amount:"80"},
      {payment_date:"21-028-2021",payment_amount:"50"},
    ];
  }

}
