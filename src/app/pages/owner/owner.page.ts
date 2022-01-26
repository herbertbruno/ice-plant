import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { SaleService } from 'src/app/services/api/sale.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {

  
constructor(private saleService: SaleService) { }
sales: ISale[];
waitingFlag: boolean;

totalSaleAmount = 0;

ngOnInit() {
  this.waitingFlag=true;
  this.saleService.getSaleList().then(cloudSalesData => {
    this.sales = cloudSalesData;

  //  let sales = ["rego","stalin","bruno"];
  //  sales[0]
  //  sales[1]
  //  sales[2]

//    sales.forEach(name=>{
// console.log(name)
//    })
 setTimeout(()=>{
   alert("sdf")
   console.log("test data",cloudSalesData)
  for(let i in cloudSalesData){
    console.log(cloudSalesData[i],"sadfdas");
  } 
 },2000) 
    this.waitingFlag= false;
  })
}
 

}
