import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { IExpense } from 'src/app/interfaces/expense';
import { CommonService } from 'src/app/services/api/common.service';
import { ExpenseService } from 'src/app/services/api/expense.service';
import { IWorker } from 'src/app/interfaces/worker';
import { WorkerService } from 'src/app/services/api/worker.service';
import * as moment from 'moment';

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


  selectedDate: any= new Date();
  date1: string = "2022-02-20";

  ngOnInit() { 

     this.getSales();
     this.calcualteWorker();
     this.calculateExpense();

  }
  dateChanged(d){   
    this.calculateSales();
  }

  formateDate(d:string){   
   return moment(d); 
  }

  // This function gets data from the firebase and calculates the total
  getSales(){
    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;  
    }); 
  }

  calculateSales(){
  console.log(this.selectedDate,this.date1)
 

  // using the moment.js framework comparing both dates are same
   let filter = moment(this.selectedDate).isSame(moment(this.date1)); // true or false
    
    for (let i in this.sales) {
      if(filter ==  true){
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;
        this.totalIceSold = this.totalIceSold + (sale.numberOfItems);
      }  
    }
  }



  calcualteWorker(){
    this.workerService.getWorkerList().then(cloudWorkersProductionData => {
      this.workers = cloudWorkersProductionData;
       
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
      for (let i in this.expenses) {
        let expense = this.expenses[i]; 
        this.totalExpenseAmount = this.totalExpenseAmount + expense.amount;
 } 
    }) 
  }
}