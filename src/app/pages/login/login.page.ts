import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submited: boolean = false;

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })

  }

  login() {
    console.log("submit called");
    this.submited = true;
    console.log(this.submited)

   //  if (this.loginForm.valid) {
   //    console.log(this.loginForm.value);
  //   this.auth.signIn(this.loginForm.value.userName, this.loginForm.value.password)
    this.router.navigate(['/home']);
     //} else {
 //    alert("not valid")
  //  }
  }

  navigatePage() {
    this.router.navigate(['/home']);
  }

}
