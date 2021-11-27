import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {

  
constructor() { }
expense: string;
onDuty:string;
Date:number;
noofbarsSold:number;
lastProduction:number;
credit:number;
totalSale:number;
ngOnInit() {
}
savechanges(){
let  changeValues = {

  expense:this.expense,
  onDuty:this.onDuty,
  noofbarsSold:this.noofbarsSold,
  Date:this.Date,
  lastProduction:this.lastProduction,
  credit:this.credit,
  totalSale:this.totalSale

}
  console.log(changeValues);
}

}
