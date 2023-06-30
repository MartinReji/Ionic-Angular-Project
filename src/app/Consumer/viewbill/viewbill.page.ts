import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.page.html',
  styleUrls: ['./viewbill.page.scss'],
})
export class ViewbillPage implements OnInit {
  readingdata: any[] = [];
  consdetails: any[] = [];
             details: any[] = [];

  readingId!: any;
  constructor(private ss: ServiceService, private route: ActivatedRoute) { 

    this.route.paramMap
    // .pipe(take(1))
    .subscribe((params: ParamMap) => {
      this.readingId = params.get('id');
    });
  }

  ngOnInit() {

    this.ss.getreadingbyid(this.readingId).subscribe((data:any) => {
      this.readingdata[0] = data;
      this.ss.getdetailsbyconsno(this.readingdata[0].consumernumber).subscribe((data: any) => {
        this.consdetails = data;
    });
  });
  this.ss.getdetailsbyid(localStorage.getItem("consumerId")).subscribe((data: any) => {
    this.details[0] = data;
  });
 
}
printDiv()
{
  
}
}