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
  waitingFlag: boolean;

  // Sale variables
  sales: ISale[] = []; 
  totalSaleAmount = 0;
  totalSale = 0; 
  totalIceSold = 0;

  // Expenses variables
  expenses: IExpense[] = [];
  totalExpenseAmount = 0;


  // Worker variables
  workers: IWorker[];
  totalIceProduction = 0;
  previousIceProduction = 0;
  lastProduction = 0;

  ngOnInit() { 

     this.calculateSales();
     this.calcualteWorker();
     this.calculateExpense();

  }

  // This function gets data from the firebase and calculates the total
  calculateSales(){
    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;
      console.log(this.sales)
      for (let i in this.sales) {
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;
        this.totalIceSold = this.totalIceSold + (sale.numberOfItems);
        console.log(sale.ratePerItem + " * " + sale.numberOfItems + " = " + sale.ratePerItem * sale.numberOfItems)
      }
      this.waitingFlag = false;
    }); 
  }


  calcualteWorker(){
    this.workerService.getWorkerList().then(cloudWorkersProductionData => {
      this.workers = cloudWorkersProductionData;
      console.log(this.workers);
      for (let i in this.workers) {
        let worker = this.workers[i];
        this.lastProduction = this.lastProduction + worker.iceProduced;
        this.totalIceProduction = this.lastProduction + this.previousIceProduction;
      }
      
    }) 
  }


  calculateExpense(){
    this.expenseSer.getExpenseList().then((cloudExpensesData: any) => {
      this.expenses = cloudExpensesData;
      console.log(this.expenses)

      for (let i in this.expenses) {
        let expense = this.expenses[i];
        console.log(expense)
        this.totalExpenseAmount = this.totalExpenseAmount + expense.amount;
 } 
    }) 
  }
}
