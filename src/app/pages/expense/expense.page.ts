import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

  constructor() { }
  expensesType;
  expenseNotes: string;
  Amount: number;
  Time;
  Date;


  ngOnInit() {
  }
  saveExpense(){
  let  expenseValues = {

    expensesType:this.expensesType,
    expenseNote:this.expenseNotes,
    amount:this.Amount,
    Time:this.Time,
    Date:this.Date


  }
    console.log(expenseValues);
  }

}
