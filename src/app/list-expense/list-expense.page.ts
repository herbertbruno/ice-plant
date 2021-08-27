import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.page.html',
  styleUrls: ['./list-expense.page.scss'],
})
export class ListExpensePage implements OnInit {

  constructor() { }

  ngOnInit() {
    let arr1:number[]=[1,2,3];
    let arr2:(number | boolean| string)[]=[1,'a1',2,'a2',3,'a3',true];
    arr1[0]=2;
    arr2.forEach(a=>console.log(a));
  }


}
