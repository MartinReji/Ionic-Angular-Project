import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-monthlyreadingview',
  templateUrl: './monthlyreadingview.page.html',
  styleUrls: ['./monthlyreadingview.page.scss'],
})
export class MonthlyreadingviewPage implements OnInit {
  consdetails:any[]=[];
  consumerno:any[]=[];
  monthlyreading:any[]=[];
  consumer:any

  constructor(private ss:ServiceService,private fb:FormBuilder) { }
  public viewconsumerno = this.fb.group({
    consumernumber:[''], 
  })
  public viewstatus = this.fb.group({
    status:[''] 
  })
  ngOnInit() {   
    this.ss.getconsumernobyid(localStorage.getItem('consumerId')).subscribe((data: any) => {
      this.consumerno = data;
      console.log(data);
    });
  }
view()
{
  this.consumer=this.viewconsumerno.value.consumernumber;
  this.ss.getdetailsbyconsno(parseInt(this.consumer)).subscribe((data: any) => {
    this.consdetails = data;
    console.log(data);
});
}

view1()
{
  this.ss.getmonthlyreading(this.viewstatus.value.status,parseInt(this.consumer)).subscribe((data: any) => {
    this.monthlyreading = data;
    console.log(data);
});
}
}
