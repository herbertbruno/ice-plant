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
  sales: ISale[] = [];
  waitingFlag: boolean;

  totalSaleAmount = 0;

  ngOnInit() {
    this.waitingFlag = true;

    this.saleService.getSaleList().then(cloudSalesData => {
      this.sales = cloudSalesData;
      for (let i in this.sales) {
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        console.log(sale.ratePerItem + " * " + sale.ratePerItem * sale.numberOfItems)
      }
      this.waitingFlag = false;
    })
  }


}
