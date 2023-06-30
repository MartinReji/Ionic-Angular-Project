import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
readingdata: any[] = [];
  readingId!: any;
  constructor(private ss: ServiceService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private DatePipe:DatePipe ) 
  {
    this.route.paramMap
    // .pipe(take(1))
    .subscribe((params: ParamMap) => {
      this.readingId = params.get('id');
    });
   }

   currentdate:any;
   formatdate:any;
   payform!:FormGroup

  ngOnInit() {
    this.currentdate=new Date();
    this.formatdate=this.DatePipe.transform(this.currentdate,'dd-MM-yyyy');
    this.payform = this.fb.group({
      paymentstatus:'Pending',
      paymentdate:this.formatdate
    })

    this.ss.getreadingbyid(this.readingId).subscribe(res => {
      console.log(res);
      this.readingdata[0] = res;
    });
  }

 submit()
 {
  this.ss.statusupdate(this.readingId);
  this.ss.AddDate(this.readingId,this.payform.value.paymentdate);
  this.router.navigate(['Consumer/monthlyreadingview']);
 } 
}
