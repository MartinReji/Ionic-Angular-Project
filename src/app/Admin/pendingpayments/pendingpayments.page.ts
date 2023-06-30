import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pendingpayments',
  templateUrl: './pendingpayments.page.html',
  styleUrls: ['./pendingpayments.page.scss'],
})
export class PendingpaymentsPage implements OnInit {
  // panchayath:any[]=[];
  // typedata: any[]=[];
  // district: any[]=[];

  constructor(private fb:FormBuilder,private ss:ServiceService) { }
  // consdetails:any[]=[];
 
  pending:any[]=[];
  // consno:any[]=[];
  // details:any[]=[];
  total:any;
  public panchayathwise = this.fb.group({
    month:[],
    year:[]
    
  })

  ngOnInit() {
    // this.ss.getdistrict().subscribe((data: any) => {
    //   this.district = data;
    //   console.log(data);
    // });
    // this.ss.gettype().subscribe((data: any) => {
    //   this.typedata = data;
    //   console.log(data);
    // });
  }
  view()
  {
    this.ss.getpendingpayment(this.panchayathwise.value.month,this.panchayathwise.value.year).subscribe((data: any) => {
      this.pending = data;
      this.total=data.length;
      console.log(data);
    //   this.ss.getdetailsbyconsno(this.pending[0].consumernumber).subscribe((data: any) => {
    //     this.consdetails[0] = data;
    //     console.log(data);
    // });
  });
}

  // view2()
  // {
  //   console.log(this.panchayathwise.value)
  //   this.ss.getconsnobypanchayat(this.panchayathwise.value.panchayath).subscribe((data: any) => {
  //     this.consno = data;
  //     console.log(this.consdetails)
  //     this.ss.getpendingbyconsno(this.consno[0].consumernumber).subscribe((data: any) => {
  //       this.pendingdetails = data;
  //       this.ss.getdetailsbyconsno(this.pendingdetails[0].consumernumber).subscribe((data: any) => {
  //         this.consdetails = data;
  //         this.total=data.length;
  //         this.ss.getdetailsbyid(this.consdetails[0].consumerid).subscribe((data: any) => {
  //           this.details[0] = data;
  //         });
  //     });
  // });
  // });
  // }

} 

