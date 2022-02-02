import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { CommonService } from 'src/app/services/api/common.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {


  constructor(private commonSer: CommonService) { }
  sales: ISale[] = [];
  waitingFlag: boolean;

  totalSaleAmount = 0;
  totalIceSold = 0;

  ngOnInit() {
    this.waitingFlag = true;

    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;
   
      for (let key in this.sales) {

        let sale = this.sales[key];
        this.totalSaleAmount = this.totalSaleAmount +(sale.ratePerItem * sale.numberOfItems)
 
        this.totalIceSold = this.totalIceSold + ( sale.numberOfItems);
      
      
    console.log(sale.ratePerItem + " * " + sale.numberOfItems + " = " + sale.ratePerItem * sale.numberOfItems )
      }
      this.waitingFlag = false;
    })
  }


}
