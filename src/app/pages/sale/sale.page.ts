import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISale } from 'src/app/interfaces/sale';
import { SaleService } from 'src/app/services/api/sale.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/api/toast.service';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  saleForm: FormGroup;
  submited: boolean = false;
  waitingFlag: boolean; 
  total: number = 0;
  

  constructor(private navCtrl: NavController,
    public toastController: ToastController,
    private toastService: ToastService,
    private router: Router,
    private saleService: SaleService,
    public formBuilder: FormBuilder) { }
    
     

  ngOnInit() {
   
    this.saleForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      vechicleType: ['', [Validators.required]],
      ratePerItem: ['', [Validators.required]],
      numberOfItems: ['', [Validators.required]],
      iceType: ['', [Validators.required]],
      total:['']
      
    })
    
  }
  
  calculateTotal(){
      
    this.total = this.saleForm.value.ratePerItem * this.saleForm.value.numberOfItems;
     
   
  }
  
  
  
  save() {
   
    this.submited = true;
    console.log(this.saleForm.valid);
    //if (this.saleForm.valid) {
      let sale: ISale = this.saleForm.value;
      //this.saleService.createNewSale(sale);
    //  this.toastService.displayToast();
      
      console.log(this.calculateTotal());

      // this.calculateTotal();

      
      //  this.navCtrl.navigateBack("/list-sale");

      
   // }
    
  }
}