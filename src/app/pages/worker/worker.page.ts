import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { WorkerService } from 'src/app/services/api/worker.service';
import { IWorker } from 'src/app/interfaces/worker';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {
  workerForm: FormGroup;
  submited: boolean = false;

  constructor(private workerService: WorkerService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.workerForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      iceProduced: ['', [Validators.required]],
    })
  }
  save() {
    this.submited = true;

    console.log(this.workerForm.valid);
    if (this.workerForm.valid) {
      let worker: IWorker = this.workerForm.value;
      this.workerService.createNewWorker(worker);
    }

}}
