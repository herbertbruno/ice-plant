import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISale } from 'src/app/interfaces/sale';
import { IExpense } from 'src/app/interfaces/expense';
import { CommonService } from 'src/app/services/api/common.service';
import { ExpenseService } from 'src/app/services/api/expense.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {
  // ownerform: FormGroup;



  constructor(private commonSer: CommonService, private expenseSer: ExpenseService) { }
  sales: ISale[] = [];
  waitingFlag: boolean;
  totalSaleAmount = 0;
  totalSale = 0;
  totalIceSold = 0;
  expenses: IExpense[] = [];
  totalExpenseAmount = 0;

  selectedDate : any;

  dateChanged(){
    alert("date changed :: " + this.selectedDate);
  }

  ngOnInit() {
    
    this.waitingFlag = true;

     
    this.selectedDate =  new Date();

    this.commonSer.getCollectionList('sale').then((cloudSalesData: any) => {
      this.sales = cloudSalesData;
      console.log(this.sales)

      for (let i in this.sales) {
        let sale = this.sales[i];
        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;
        this.totalIceSold = this.totalIceSold + (sale.numberOfItems);
        console.log(sale.ratePerItem + " * " + sale.numberOfItems + " = " + sale.ratePerItem * sale.numberOfItems)
      }
      // this.waitingFlag = false;
    })
    this.expenseSer.getExpenseList().then((cloudExpensesData: any) => {
      this.expenses = cloudExpensesData;
      console.log(this.expenses)

      for (let i in this.expenses) {
        let expense = this.expenses[i];
        console.log(expense)
        this.totalExpenseAmount = this.totalExpenseAmount + expense.amount;

      }
      this.waitingFlag = false;
    })
  }


}

 
