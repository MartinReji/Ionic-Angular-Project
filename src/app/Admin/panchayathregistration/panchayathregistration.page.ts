import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-panchayathregistration',
  templateUrl: './panchayathregistration.page.html',
  styleUrls: ['./panchayathregistration.page.scss'],
})
export class PanchayathregistrationPage implements OnInit {
  

  constructor(private ss:ServiceService, private fb:FormBuilder, private router:Router) { }
  district:any[]=[];
  regform=this.fb.group({
    districtname:['',Validators.required],
    panchayathname:['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]]
  })

  ngOnInit() {
    this.ss.getdistrict().subscribe((data: any) => {
      this.district = data;
      console.log(data);
    });
  }

  submit() 
  {
   console.log(this.regform.value);
   this.ss.AddPanchayath(this.regform.value).then(() => {
    alert("Registration Completed");
    this.router.navigate(['Admin/panchayathview']);
  });
  }
}
