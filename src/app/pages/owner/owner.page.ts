import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { IExpense } from 'src/app/interfaces/expense';
import { CommonService } from 'src/app/services/api/common.service';
import { ExpenseService } from 'src/app/services/api/expense.service';
import { IWorker } from 'src/app/interfaces/worker';
import { WorkerService } from 'src/app/services/api/worker.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {

  constructor(private commonSer: CommonService, private expenseSer: ExpenseService, private workerService: WorkerService) { }

  sales: ISale[] = [];
  waitingFlag: boolean;
  totalSaleAmount = 0;
  totalSale = 0;
  totalIceSold = 0;
  expenses: IExpense[] = [];
  totalExpenseAmount = 0;
  workers: IWorker[];
  totalIceProduction = 0;
  previousIceProduction = 0;
  lastProduction = 0;

  ngOnInit() {

    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;
      for (let i in this.sales) {
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;
        this.totalIceSold = this.totalIceSold + (sale.numberOfItems);
        console.log(sale.ratePerItem + " * " + sale.numberOfItems + " = " + sale.ratePerItem * sale.numberOfItems)
      }
      this.waitingFlag = false;
    });

    this.waitingFlag = true;

    this.workerService.getWorkerList().then(cloudWorkersProductionData => {
      this.workers = cloudWorkersProductionData;
      console.log(this.workers);
      for (let i in this.workers) {
        let worker = this.workers[i];
        this.lastProduction = this.lastProduction + worker.iceProduced;
        this.totalIceProduction = this.lastProduction + this.previousIceProduction;
      }
      this.waitingFlag = false;
    })

  }
}
