import { Time } from "@angular/common";

export interface IExpense {
    expensesType:string;
    expenseNotes:string;
    date:Date;
    time:Time;
    amount:number;
}
