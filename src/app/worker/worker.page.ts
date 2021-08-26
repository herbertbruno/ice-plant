import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {

constructor() { }
Date;
Time;
nooficeproduced;
ngOnInit() {
}
saveWorker(){
let Values = {
  Date:this.Date,
  Time:this.Time,
  nooficeproduced:this.nooficeproduced


}
  console.log(Values);
}

}
