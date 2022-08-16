import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/interfaces/sale';
import { SaleService } from 'src/app/services/api/sale.service';
import { CommonService } from 'src/app/services/api/common.service';
import * as moment from 'moment';
@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.page.html',
  styleUrls: ['./list-sale.page.scss'],
})
export class ListSalePage implements OnInit {
  sales: any = [];
  waitingFlag: boolean;
  selectedDate: any = new Date();
  totalSaleAmount = 0;
  totalSale = 0;
  totalIceSold = 0;
  filterTerm: string;  

  constructor(private saleService: SaleService, private commonSer: CommonService,) { }

  getSaleList(event: any = false) {
    this.saleService.getSaleList().then(cloudSalesData => {
      this.sales = cloudSalesData;
      if (event) {// pull down to refresh call
        event.detail.complete();// stop loading
      }
    })

  }
  ngOnInit() {
    this.getSaleList();
    this.getSales();
  }
  dateChanged(d) {
    //this.selectedDate =  this.formateDate(d); 
    this.calculateSales();
  }
  formateDate(d: string) {
    return moment(d).format("DD-MM-YYYY");
  }
  formateTime(d: string) {
    return moment(d).format("HH:mm");
  }
  getSales() {
    this.commonSer.getCollectionList('sale').then(cloudSalesData => {
      this.sales = cloudSalesData;
    });
  }

  calculateSales() {
    this.totalSaleAmount = 0;
    this.totalSale = 0;
    this.totalIceSold = 0;
    for (let i in this.sales) {
      let sale = this.sales[i];
      //  console.log("selectedDate : : : ",this.formateDate(this.selectedDate))
      //  console.log("sale.date : : : ",this.formateDate(sale.date))

      if (this.formateDate(this.selectedDate) == this.formateDate(sale.date)) {
        this.saleService.getSaleList().then(cloudSalesData => {
          console.log(cloudSalesData);
          this.sales = cloudSalesData;

        })
      }
    }
  }
  ionViewWillEnter() {
    this.waitingFlag = true;
    this.saleService.getSaleList().then(cloudSalesData => {
      console.log(cloudSalesData);
      this.sales = cloudSalesData;
      this.waitingFlag = false;
    })
  }
}
