import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'cur'
})
export class CurPipe implements PipeTransform {


  constructor(private currencyPipe: CurrencyPipe) {
  }

  transform(amount: string | number, ...args) {

    if (!amount) {
      amount = '0.00';
    } else {
      if (typeof amount == 'number') {
        amount = '' + amount;
      }
    }
    return this.currencyPipe.transform(amount, "INR", 'symbol-narrow', '1.2-2');
  }

}
