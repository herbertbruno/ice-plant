import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {
  workerForm: FormGroup;
  submited: boolean = false;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.workerForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      iceProduced: ['', [Validators.required]],
    })
  }
  save() {
    console.log("submit called");
    this.submited = true;
    console.log(this.submited)
    console.log(this.workerForm.value);
  }

}
