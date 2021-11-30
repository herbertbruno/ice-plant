import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  SaleForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }
  ratePerItem: number = 0;
  numberOfItems: number = 0;
  total: number = 0;
  
  ngOnInit() {
    this.SaleForm = this.formBuilder.group({
      Date: [],
      Time: [],
      vechicleType:[],
      ratePerItem:[],
      numberOfItems:[],
      iceType:[],
    })


  }
  save() {
    if (this.SaleForm.valid) {
      console.log(this.SaleForm.value);
      //this.router.navigate(['/home']);
    } else {
      alert("not valid")
    }
     //console.log("Valid ", );

  }
  // calculateTotal() {
  //   this.total = this.ratePerItem * this.numberOfItems;
  // }
}
