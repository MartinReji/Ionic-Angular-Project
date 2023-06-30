import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-panchayathwise',
  templateUrl: './panchayathwise.page.html',
  styleUrls: ['./panchayathwise.page.scss'],
})
export class PanchayathwisePage implements OnInit {
  panchayath:any[]=[];
  typedata: any[]=[];
  district: any[]=[];

  constructor(private fb:FormBuilder,private ss:ServiceService) { }
  consdetails:any[]=[];
  details:any[]=[];
  total:any;
  public panchayathwise = this.fb.group({
    district:[''],
    panchayath: [''],
    date1:[],
    date2:[],
    typename:['']
  })

  ngOnInit() {
    this.ss.getdistrict().subscribe((data: any) => {
      this.district = data;
      console.log(data);
    });
    this.ss.gettype().subscribe((data: any) => {
      this.typedata = data;
      console.log(data);
    });
  }
  view1()
  {
    this.ss.getpanchayathbydistrict(this.panchayathwise.value.district).subscribe((data: any) => {
      this.panchayath = data;
      console.log(data);
    });
  }
  view2()
  {
    console.log(this.panchayathwise.value)
    this.ss.getdetailsbypanchayat(this.panchayathwise.value.panchayath,this.panchayathwise.value.typename,this.panchayathwise.value.date1,this.panchayathwise.value.date2).subscribe((data: any) => {
      this.consdetails = data;
      console.log(this.consdetails)
this.total=data.length;
if(data)
{
      this.ss.getdetailsbyid(this.consdetails[0].consumerid).subscribe((data: any) => {
        this.details[0] = data;
      });
    }
  }
    );
  }
    }
  
