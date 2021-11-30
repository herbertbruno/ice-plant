import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.page.html',
  styleUrls: ['./list-customer.page.scss'],
})
export class ListCustomerPage implements OnInit {
  customers=[];

  constructor() { }

  ngOnInit() {
    this. customers= ['customer 1', 'customer 2', 'customer 3', 'customer4', 'customer 5', 'customer 6'];
  }

}
