import { Component, OnInit } from '@angular/core';
import { IWorker } from 'src/app/interfaces/worker';
import { WorkerService } from 'src/app/services/api/worker.service';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.page.html',
  styleUrls: ['./list-worker.page.scss'],
})
export class ListWorkerPage implements OnInit {
  workers:IWorker[];
  waitingFlag: boolean;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.waitingFlag= true;
    this.workerService.getWorkerList().then(cloudCustomersData => { 
      this.workers = cloudCustomersData;
      console.log(this.workers)
      this.waitingFlag = false;
    })

}
}