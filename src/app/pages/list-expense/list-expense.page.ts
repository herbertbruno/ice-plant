import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IExpense } from 'src/app/expense';
import { ExpenseService } from 'src/app/services/api/expense.service';
@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.page.html',
  styleUrls: ['./list-expense.page.scss'],
})
export class ListExpensePage implements OnInit {
  expenses: IExpense[];
  filterTerm: string;
  waitingFlag: boolean;

  constructor(private expenseService: ExpenseService) { }

  getExpenseList(event: any = false){
    this.expenseService.getExpenseList().then(cloudCustomersData => { 
      this.expenses = cloudCustomersData;
      if(event){// pull down to refresh call
        event.detail.complete();// stop loading
      }
      
    })

  }
  ngOnInit() {
    this.getExpenseList();
    
  }
  ionViewWillEnter(){
    this.waitingFlag= true;
    this.expenseService.getExpenseList().then(cloudCustomersData => { 
      this.expenses = cloudCustomersData;
      this.waitingFlag = false;
    })

  }
  formateDate(d: string) {
    return moment(d).format("DD-MM-YYYY");
  }
  formateTime(d: string) {
    return moment(d).format("HH:mm");
  }

}
