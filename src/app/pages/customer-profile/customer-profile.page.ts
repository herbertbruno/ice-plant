import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {

  //customerForm: any;
  customerProfileForm: FormGroup;
  submited: boolean = false;

  constructor(private customerService: CustomerService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerProfileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      vechicleType: ['', [Validators.required]],
      needRecipt: ['', [Validators.required]],
    })
  }
  save() {

    this.submited = true;

    console.log(this.customerProfileForm.valid);
    if (this.customerProfileForm.valid) {
      let customer: ICustomer = this.customerProfileForm.value;
      this.customerService.createNewCustomer(customer);
    }

  }
}




