import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { IWorker } from 'src/app/interfaces/worker';
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
  totalSale = 0; 
  totalIceSold = 0;
  workers: IWorker[] ;
  totalIceProduction= 0;
  previousIceProduction= 0;
  lastProduction=0;
  ngOnInit() {
    this.waitingFlag = true;

    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData; 

      for (let i in this.sales) {
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;   
        this.totalIceSold = this.totalIceSold + ( sale.numberOfItems);  
        console.log(sale.ratePerItem + " * " + sale.numberOfItems + " = " + sale.ratePerItem * sale.numberOfItems ) 
      }
      this.waitingFlag = false;
    })
{
    this.waitingFlag = true;

    this.commonSer.getCollectionList('worker').then(cloudWorkersProductionData => {
      this.workers = cloudWorkersProductionData; 

      for (let i in this.workers) {
        let worker = this.workers[i];
        this.lastProduction = this.lastProduction + worker.iceProduced ;
        this.totalIceProduction = this.lastProduction + this.previousIceProduction ;
      }
      this.waitingFlag = false;
    })
  }
  }
}
