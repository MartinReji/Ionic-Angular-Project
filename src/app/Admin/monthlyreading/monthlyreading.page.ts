import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-monthlyreading',
  templateUrl: './monthlyreading.page.html',
  styleUrls: ['./monthlyreading.page.scss'],
})
export class MonthlyreadingPage implements OnInit {

  constructor(private fb:FormBuilder, private ss:ServiceService, private router:Router, private DatePipe:DatePipe) { }
  details:any[]=[];
  typedetails:any[]=[];
  usedunit:any
  totalamount:any
  previousreading:any
  consdetails:any[]=[];
  monthelydetais:any[]=[];
  readingform!:FormGroup
  currentdate:any;
  month:any;
  year:any;
  currentmonth:any;
  currentyear:any;
  formatdate:any;
  ngOnInit() {

    this.currentdate=new Date();
    this.formatdate=this.DatePipe.transform(this.currentdate,'dd-MM-yyyy');
    this.month=this.DatePipe.transform(this.currentdate,'MM');
    this.currentmonth=parseInt(this.month);
    this.year=this.DatePipe.transform(this.currentdate,'yyyy');
    this.currentyear=parseInt(this.year);
    this.readingform = this.fb.group({
      consumernumber: ['',Validators.required],
      previousreading: [''],
      currentreading: ['',Validators.required],
      unitused: [''],
      fineamount: [''],
      totalamount: [''],
date:this.formatdate,
month:this.currentmonth,
year:this.currentyear,
paymentstatus:"Pending"
    })
  }
  view()
  {
    this.ss.getdetailsbyconsno(this.readingform.value.consumernumber).subscribe((data: any) => {
      this.consdetails = data;
      this.ss.getdetailsbyid(this.consdetails[0].consumerid).subscribe((data: any) => {
        this.details[0] = data;
      });
      console.log(this.month);

      this.month=this.month-1;
      console.log(this.month);

if(this.month==0) 
{
this.month=12;
this.year=this.year-1;
}

    this.ss.getmonthelydetaisbyconsno(this.readingform.value.consumernumber,parseInt(this.month),parseInt(this.year)).subscribe((data: any) => {
      this.monthelydetais = data;
      console.log("monthelydetais");
      console.log(this.monthelydetais);
    console.log(this.monthelydetais.length);
if(this.monthelydetais.length>0)
{
  this.readingform.setValue({
    consumernumber:this.readingform.value.consumernumber,
    previousreading:this.monthelydetais[0].currentreading,
    currentreading:"",
    unitused:"",
    fineamount:"",
    totalamount:"",
    date:"",
month:"",
year:"",
paymentstatus:"Pending"
    });
}

else{
  // alert("jhgf");
  this.readingform.setValue({
    consumernumber:this.readingform.value.consumernumber,
    previousreading:0,
    currentreading:"",
    unitused:"",
    fineamount:"",
    totalamount:"",
    date:"",
month:"",
year:"",
paymentstatus:"Pending"
  })
}
  })
});

  }
 
  viewunitused()
  {
    this.usedunit=this.readingform.value.currentreading-this.readingform.value.previousreading;
    // alert(this.usedunit);
    this.readingform.setValue({
      consumernumber:this.readingform.value.consumernumber,
      previousreading:this.readingform.value.previousreading,
      currentreading:this.readingform.value.currentreading,
      unitused:this.usedunit,
      fineamount:"",
      totalamount:"",
      date:"",
  month:"",
  year:"",
  paymentstatus:"Pending"
})

    this.ss.gettypebytypename(this.consdetails[0].typename).subscribe((data: any) => {
      this.typedetails = data;
      console.log(this.typedetails)
const limit=this.typedetails[0].limit;
const fine=this.typedetails[0].fineamount;
const unitamount=this.typedetails[0].unitamount;

this.totalamount=unitamount*this.usedunit;

if(this.usedunit>limit)
{
const difference =this.usedunit-limit;
const fineamount=difference*fine;
  this.totalamount=this.totalamount+fineamount;
  this.readingform.setValue({
    consumernumber:this.readingform.value.consumernumber,
    previousreading:this.readingform.value.previousreading,
    currentreading:this.readingform.value.currentreading,
    unitused:this.usedunit,
    fineamount:fineamount,
    totalamount:this.totalamount,
    date:this.formatdate,
  month:this.currentmonth,
  year:this.currentyear,
  paymentstatus:"Pending"
  })
} 
else
{
this.readingform.setValue({
  consumernumber:this.readingform.value.consumernumber,
  previousreading:this.readingform.value.previousreading,
  currentreading:this.readingform.value.currentreading,
  unitused:this.usedunit,
  fineamount:0,
  totalamount:this.totalamount,
  date:this.formatdate,
month:this.currentmonth,
year:this.currentyear,
paymentstatus:"Pending"
})
}
});
  }
  
  submit() 
  {
   console.log(this.readingform.value);
   this.ss.AddMonthlyreading(this.readingform.value).then(() => {
    alert("Registration Completed");
    this.router.navigate(['Admin/index']);
  });
  }
}