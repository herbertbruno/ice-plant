import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { SaleService } from 'src/app/services/api/sale.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.page.html',
  styleUrls: ['./list-sale.page.scss'],
})
export class ListSalePage implements OnInit {
  sales: ISale[];
  waitingFlag: boolean;


  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.waitingFlag=true;
    this.saleService.getSaleList().then(cloudSalesData => {
      this.sales = cloudSalesData;
      this.waitingFlag= false;
    })
    // this.sales = ['Sale 1', 'Sale 2', 'Sale 3', 'Sale 4', 'Sale 5', 'Sale 6'];

    // for (var sale of this.sales) {
    //    console.log(sale);
    // }


  }

}
