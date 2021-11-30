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
  customerprofileForm: FormGroup;
  

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {

    

    this.customerprofileForm = this.formBuilder.group({
      name: [],
      mobile: [],
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      vechicleType:[],
      needRecipt:[] 

    })

  }
  save() {
    if (this.customerprofileForm.valid) {
      console.log(this.customerprofileForm.value);
      //this.router.navigate(['/home']);
    } else {
      alert("not valid")
    }
     //console.log("Valid ", );

  }
  

}

  


