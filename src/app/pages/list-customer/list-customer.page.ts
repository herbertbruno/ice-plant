 
import { Component, OnInit,EventEmitter,Output } from '@angular/core';

import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
// import { EventEmitter } from 'stream';



@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.page.html',
  styleUrls: ['./list-customer.page.scss'],
})
export class ListCustomerPage {
  customers: ICustomer[];
 
  filterTerm: string;  
  waitingFlag: boolean=false; 

  constructor(private customerService: CustomerService) {   
  }
 
getCustomerList( event: any = false){
  this.customerService.getCustomerList().then(cloudCustomersData => {
    this.customers = cloudCustomersData;
    if(event){// pull down to refresh call
      event.detail.complete();// stop loading
    }
  })
}
  ngOnInit() {
    this.getCustomerList();
 
  ionViewWillEnter() {
    this.waitingFlag = true;
    this.customerService.getCustomerList().then(cloudCustomersData => {
      console.log(cloudCustomersData);
      this.customers = cloudCustomersData;
      this.waitingFlag = false;
    })
 
  }
 
}
