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
nooficeproduced: number;


ngOnInit() {
}
saveworker(){
let  workerValues = {
  nooficeproduced:this.nooficeproduced,
  Time:this.Time,
  Date:this.Date


}
  console.log(workerValues);
}

}
