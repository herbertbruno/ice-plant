import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.page.html',
  styleUrls: ['./list-expense.page.scss'],
})
export class ListExpensePage implements OnInit {
  expenses=[];
  constructor() { }

  ngOnInit() {
    this.expenses = ['expense 1', 'expense 2', 'expense 3', 'expense 4', 'expense 5', 'expense 6'];
    
  }


}
