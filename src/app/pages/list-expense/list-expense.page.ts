import { Component, OnInit } from '@angular/core';
import { IExpense } from 'src/app/expense';
import { ExpenseService } from 'src/app/services/api/expense.service';
@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.page.html',
  styleUrls: ['./list-expense.page.scss'],
})
export class ListExpensePage implements OnInit {
  expenses: IExpense[];
  waitingFlag: boolean;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.waitingFlag= true;
    this.expenseService.getExpenseList().then(cloudCustomersData => { 
      this.expenses = cloudCustomersData;
      this.waitingFlag = false;
    })
  }


}
