import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IExpense } from 'src/app/expense';
import { ExpenseService } from 'src/app/services/api/expense.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  expenseForm: FormGroup;
  submited: boolean = false;


 

  constructor(private expenseService :  ExpenseService , public formBuilder: FormBuilder) { }
 


  ngOnInit() {

    this.expenseForm = this.formBuilder.group({
      expensesType: ['', [Validators.required, ]],
      expenseNotes: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })

  }
  save() {
   
    this.submited = true;

    console.log(this.expenseForm.valid);
    if (this.expenseForm.valid) {
      let expense:IExpense = this.expenseForm.value;
      this.expenseService.createNewExpense(expense);
    }
  }
  

}