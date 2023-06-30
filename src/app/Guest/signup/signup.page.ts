import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public valid = false;
  constructor(private fb:FormBuilder, private ss:ServiceService, private router:Router, private DatePipe:DatePipe) { }

  currentdate:any;
  formatdate:any;
  signupform!:FormGroup

  ngOnInit() {
    this.currentdate=new Date();
    this.formatdate=this.DatePipe.transform(this.currentdate,'dd-MM-yyyy');
    this.signupform = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
      email: ['',[Validators.required,Validators.email]],
      contactnumber: ['',[Validators.required,Validators.minLength(10)]],
      aadharnumber: ['',Validators.required],
      password: ['',Validators.required],
      regdate:this.formatdate
    })
  }
  submit() 
  {
    if(this.signupform.valid){
      console.log(this.signupform.value);
      this.ss.AddCustomer(this.signupform.value).then(() => {
       alert("Registration Completed");
       this.router.navigate(['Guest/signin']);
     });
    }
    else{
      alert("Invalid data")
    }
  }

}
