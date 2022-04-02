import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ICustomer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
import { ToastService } from 'src/app/services/api/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit   {

  //customerForm: any;
  customerProfileForm: FormGroup;
  submited: boolean = false;
  waitingFlag: boolean;

  

  constructor(private navCtrl: NavController,
    public toastController: ToastController,
    private toastService:ToastService,
    private router: Router,
    private auth: AuthService, private customerService: CustomerService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerProfileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      vechicleType: ['', [Validators.required]],
      needRecipt: ['', [Validators.required]],
    })
  }
 
  
  save() {

    this.submited = true;
    console.log(this.customerProfileForm.valid);
    console.log(this.customerProfileForm.value);
    this.toastService.displayToast();
    if (this.customerProfileForm.valid) {
   //   let customer: ICustomer = this.customerProfileForm.value;
    //  this.customerService.createNewCustomer(customer)
    //  this.navCtrl.navigateBack("/list-customer");
      this.toastService.displayToast();
     
    }
  }
  import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
export default function MyForm() {
  
  const YupForm = Yup.object().shape({
    name: Yup.string()
      .required('This value is required')
      .min(3, 'Proivde atleast 3 chars'),
    email: Yup.string().required('Email required').email(),
  })
  const resolverForm = { resolver: yupResolver(YupForm) }
  const { register, handleSubmit, reset, formState } = useForm(resolverForm)
  const { errors } = formState
  const [user, userData] = useState(null)
  useEffect(() => {
    setTimeout(
      () =>
        userData({
          name: 'Henna',
          email: 'henna@abc.com',
        }),
      1050,
    )
  }, [])
  useEffect(() => {
    reset(user)
  }, [user])
  function onRHFSubmit(res) {
    console.log(res)
    return false
  }
  return (
    <div className="container mt-5">
      <h2>React Clear Form Values and Error Messages Example</h2>
      <form onSubmit={handleSubmit(onRHFSubmit)}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            name="name"
            type="text"
            {...register('name')}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
        <button
          type="button"
          onClick={() =>
            reset({
              name: '',
              email: '',
            })
          }
          className="btn btn-info">
          Reset
        </button>
      </form>
    </div>
  )
}
}