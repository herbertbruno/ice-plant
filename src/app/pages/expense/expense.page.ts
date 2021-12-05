import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  expenseForm: FormGroup

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }
 


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
    if (this.expenseForm.valid) {
      console.log(this.expenseForm.value);
     
    } else {
      alert("not valid")
    }
    // console.log("Valid ", );

  }
  

}