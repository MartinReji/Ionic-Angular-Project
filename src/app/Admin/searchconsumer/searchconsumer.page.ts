import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-searchconsumer',
  templateUrl: './searchconsumer.page.html',
  styleUrls: ['./searchconsumer.page.scss'],
})
export class SearchconsumerPage {

  consdetails:any[]=[];
  details:any[]=[];

  constructor(private fb:FormBuilder,private ss:ServiceService) { }

  paymentstatus=this.fb.group({
    consumernumber:[Validators.required]
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
}
