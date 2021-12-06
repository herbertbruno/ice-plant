import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  saleForm: FormGroup;
  submited: boolean = false;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.saleForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      vechicleType: ['', [Validators.required]],
      ratePerItem: ['', [Validators.required]],
      numberOfItems: ['', [Validators.required]],
      iceType: ['', [Validators.required]],
    })


  }
  save() {
    console.log("submit called");
    this.submited = true;
    console.log(this.submited)
    console.log(this.saleForm.value);
    //if (this.saleForm.valid) {
    //console.log(this.saleForm.value);
    //this.router.navigate(['/home']);
    //} else {
    //alert("not valid")
    //}
    //console.log("Valid ", );

  }
  // calculateTotal() {
  //   this.total = this.ratePerItem * this.numberOfItems;
  // }
}
