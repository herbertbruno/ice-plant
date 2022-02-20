import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.page.html',
  styleUrls: ['./list-customer.page.scss'],
})
export class ListCustomerPage implements OnInit {
  customers: ICustomer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerList().then(cloudCustomersData => {
      console.log(cloudCustomersData);
      this.customers = cloudCustomersData;
    })
  }

}
