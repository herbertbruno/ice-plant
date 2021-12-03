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
  saleForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }
  ratePerItem: number = 0;
  numberOfItems: number = 0;
  total: number = 0;
  
  ngOnInit() {
    this.saleForm = this.formBuilder.group({
      date: [],
      time: [],
      vechicleType:[],
      ratePerItem:[],
      numberOfItems:[],
      iceType:[],
    })


  }
  save() {
    if (this.saleForm.valid) {
      console.log(this.saleForm.value);
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
