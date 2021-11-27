import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {

  
constructor() { }

Date:number;
Time:number;
iceProduced:number;
ngOnInit() {
}
savechanges(){
let  changeValues = {

  iceProduced:this.iceProduced,
  Date:this.Date,
  Time:this.Time,
  
}
  console.log(changeValues);
}

}
