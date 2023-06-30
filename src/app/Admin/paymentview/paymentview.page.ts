import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.page.html',
  styleUrls: ['./paymentview.page.scss'],
})
export class PaymentviewPage {

  paymentdetails:any[]=[];
  consdetails:any[]=[];
  details:any[]=[];

  constructor(private fb:FormBuilder,private ss:ServiceService) { }

  paymentstatus=this.fb.group({
    consumernumber:[Validators.required],
    month:[,Validators.required],
    year:[,Validators.required]
  })

  view()
  {
    this.ss.getdetailsbyconsno(this.paymentstatus.value.consumernumber).subscribe((data: any) => {
      this.consdetails = data;
      this.ss.getdetailsbyid(this.consdetails[0].consumerid).subscribe((data: any) => {
        this.details[0] = data;
      });
    });
  }
  view1()
  {
    this.ss.getmonthelydetaisbyconsno(this.paymentstatus.value.consumernumber,this.paymentstatus.value.month,this.paymentstatus.value.year).subscribe((data: any) => {
      this.paymentdetails = data;
      console.log(data);
    });
  }
  // ngOnInit() {
  // }

}
