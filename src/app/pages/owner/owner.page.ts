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
  

  ngOnInit() { 

     this.getSales();
     this.calcualteWorker();
     this.calculateExpense();
     this.getExpense();
     

  }
  dateChanged(d){  
    //this.selectedDate =  this.formateDate(d); 
    this.calculateSales();
    this.calculateExpense();
    
   
  }

  formateDate(d:string){   
   return moment(d).format("DD-MM-YYYY"); 
  }

  // This function gets data from the firebase and calculates the total
  getSales(){
    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;  
    }); 
  }

  calculateSales(){ 
 
    this.totalSaleAmount = 0;
    this.totalSale = 0;
    this.totalIceSold = 0;

    for (let i in this.sales) {
      let sale = this.sales[i];
      //  console.log("selectedDate : : : ",this.formateDate(this.selectedDate))
      //  console.log("sale.date : : : ",this.formateDate(sale.date))

      if( this.formateDate(this.selectedDate) == this.formateDate(sale.date) ){
       
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

  


  getExpense(){
    this.expenseSer.getExpenseList().then((cloudExpensesData: any) => {
      this.expenses = cloudExpensesData; 
    });
  }


  calculateExpense(){
    this.totalExpenseAmount = 0;
      for (let i in this.expenses) {
        let expense = this.expenses[i]; 
        if( this.formateDate(this.selectedDate) == this.formateDate(expense.date) ){
        this.totalExpenseAmount = this.totalExpenseAmount + expense.amount;
         }
 } 
    
  }
}