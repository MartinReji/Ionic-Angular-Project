import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-searchbill',
  templateUrl: './searchbill.page.html',
  styleUrls: ['./searchbill.page.scss'],
})
export class SearchbillPage {

  details:any[]=[];
  billno:any
  constructor(private fb:FormBuilder,private ss:ServiceService) { }
  paymentstatus=this.fb.group({
    billid:[]
  })
 
  
  view()
  {
    console.log(this.paymentstatus.value);
    this.ss.getbilldetails(this.paymentstatus.value.billid).subscribe((data: any) => {
      this.details[0] = data;
      console.log(this.details);
    });
  }
}
