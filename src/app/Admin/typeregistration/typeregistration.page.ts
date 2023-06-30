import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-typeregistration',
  templateUrl: './typeregistration.page.html',
  styleUrls: ['./typeregistration.page.scss'],
})
export class TyperegistrationPage implements OnInit {
  public valid = false;
  constructor(private fb:FormBuilder, private ss:ServiceService, private router:Router) { }

  public regform = this.fb.group({
    typename: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
    connectionamount: ['',Validators.required],
    unitamount: ['',Validators.required],
    limit: ['',Validators.required],
    fineamount: ['',Validators.required],
    description: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]]
  })

  ngOnInit() {
  }
  submit() 
  {
   console.log(this.regform.value);
   this.ss.AddType(this.regform.value).then(() => {
    alert("Registration Completed");
    this.router.navigate(['Admin/typeview']);
  });
  }
}
