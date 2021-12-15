import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

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
    console.log("submit called");
    this.submited = true;
    console.log(this.submited)
    console.log(this.customerProfileForm.value);
  }
}




