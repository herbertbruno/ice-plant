import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.page.html',
  styleUrls: ['./list-sale.page.scss'],
})
export class ListSalePage implements OnInit {
  sales = [];
  
  constructor() {

   } 
  
  ngOnInit() {
    this.sales = ['Sale 1', 'Sale 2', 'Sale 3', 'Sale 4', 'Sale 5', 'Sale 6'];

    // for (var sale of this.sales) {
    //    console.log(sale);
    // }


  }

}
