import { Time } from "@angular/common";

export interface IExpense {
    expensesType:string;
    expenseNotes:string;
    date:string;
    time:Time;
    amount:number;
}
