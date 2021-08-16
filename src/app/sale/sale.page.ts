import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  constructor() { }
  ratePerItem: number = 0;
  numberOfItems: number = 0;
  total: number = 0;

  ngOnInit() {

  }
  // calculateTotal() {
  //   this.total = this.ratePerItem * this.numberOfItems;
  // }

}
