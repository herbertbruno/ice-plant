import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {
  name: string;
  mobile: number;
  email: string;
  vechicleType: string;
  needRecipt: boolean;
  constructor() { }

  ngOnInit() {
  }

}
