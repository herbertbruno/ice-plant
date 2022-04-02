import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { CommonService } from 'src/app/services/api/common.service';
import { SaleService } from 'src/app/services/api/sale.service';
import * as moment from 'moment';
@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.page.html',
  styleUrls: ['./list-sale.page.scss'],
})
export class ListSalePage implements OnInit {
  sales: any =[];
  waitingFlag: boolean;


  constructor(private commonSer: CommonService,private saleService: SaleService) { }
  sale: ISale[] = [];
  totalSaleAmount = 0;
  totalSale = 0;
  totalIceSold = 0;

  selectedDate: any = new Date(); 

  ngOnInit() {
    this.getSales();
    this.waitingFlag = true;
    this.saleService.getSaleList().then(cloudSalesData => {
      this.sales = cloudSalesData;
      console.log(cloudSalesData);
      this.waitingFlag = false;
    })
    // this.sales = ['Sale 1', 'Sale 2', 'Sale 3', 'Sale 4', 'Sale 5', 'Sale 6'];

    // for (var sale of this.sales) {
    //    console.log(sale);
    // }


  } 
  dateChanged(d) {
    this.calculateSales();
   
  }
  formateDate(d: string) {
    return moment(d).format("DD-MM-YYYY");
  }
  getSales() {
    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;
    });
  }
    calculateSales(){ this.totalSaleAmount = 0;
    this.totalSale = 0;
    this.totalIceSold = 0;

    for (let i in this.sales) {
      let sale = this.sales[i];
      //  console.log("selectedDate : : : ",this.formateDate(this.selectedDate))
      //  console.log("sale.date : : : ",this.formateDate(sale.date))

      if (this.formateDate(this.selectedDate) == this.formateDate(sale.date)) {

        this.totalSaleAmount = this.totalSaleAmount + (sale.ratePerItem * sale.numberOfItems);
        this.totalSale = this.totalSale + 1;
        this.totalIceSold = this.totalIceSold + (sale.numberOfItems);
      }

    }}
  }