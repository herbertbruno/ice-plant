import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-payment',
  templateUrl: './record-payment.page.html',
  styleUrls: ['./record-payment.page.scss'],
})
export class RecordPaymentPage implements OnInit {
  toni;
  date;
  time;
  customername;
  paymenttype;
  amount;

  constructor() { }


  ngOnInit() {
    this.toni = "The super Man";

  }
  showValues() {

    let allValues = {
      date: this.date,
      time: this.time,
      customer: this.customername,
      payment: this.paymenttype,
      money: this.amount
    }
    console.log(allValues)

  }

}
