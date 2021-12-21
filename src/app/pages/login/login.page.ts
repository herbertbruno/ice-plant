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

    this.submited = true;
    // local validation
    if (this.loginForm.valid) {

      let userName = this.loginForm.value.userName;
      let password = this.loginForm.value.password;
      // server call 
      this.auth.signIn(userName, password)
        .then(userData => { // Server response
          // userData is the server response

          if (userData.user != null) { // validating user data 
            this.router.navigate(['/home']);
          } else {
            alert("Some server error")
          }
        })
    } else {
      alert("error");
    }

  }

  navigatePage() {
    this.router.navigate(['/home']);
  }

}
