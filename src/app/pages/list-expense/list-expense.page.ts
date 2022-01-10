import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.page.html',
  styleUrls: ['./list-expense.page.scss'],
})
export class ListExpensePage implements OnInit {
  customers: ICustomer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerList().then(cloudCustomersData => {
      this.customers = cloudCustomersData;
    })
  }
  }

