import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.page.html',
  styleUrls: ['./list-worker.page.scss'],
})
export class ListWorkerPage implements OnInit {
  workers=[];
  constructor() { }

  ngOnInit() {
    this. workers= ['worker 1', 'worker 2', 'worker 3', 'worker4', 'worker 5', 'worker 6'];

  }

}
