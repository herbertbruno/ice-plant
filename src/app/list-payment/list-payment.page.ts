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
    this. payments= ['payment 1', 'payment 2', 'payment 3', 'payment 4', 'payment 5', 'payment 6'];
  }

}
