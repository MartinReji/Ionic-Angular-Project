import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-requestviewmore',
  templateUrl: './requestviewmore.page.html',
  styleUrls: ['./requestviewmore.page.scss'],
})
export class RequestviewmorePage implements OnInit {

  public customerid:any;
  public details: any[] = [];
  request: any[] = [];
  newconnectionId!: any;
  newconsumerno: any;
  constructor(private ss:ServiceService,private route: ActivatedRoute,private router: Router) {
    this.route.paramMap
    // .pipe(take(1))
    .subscribe((params: ParamMap) => {
      this.newconnectionId = params.get('id');
    }); 
  }
  ngOnInit() {
    
    this.ss.getnewconnectionbyid(this.newconnectionId).subscribe((data: any) => {
      this.request = data;
      this.customerid=data.consumerid;
      this.ss.getdetailsbyid(this.customerid).subscribe(res => {
        console.log(res);
        this.details[0] = res;
      });

      console.log(data);
    });

  }
  accept()
        {
          if(confirm("you want to accept?")){

            this.ss.consumernogen().pipe(take(1)).subscribe(res => {
              this.newconsumerno = 1000+(res.length+1);
              console.log(this.newconsumerno);
              this.ss.numberupdate(this.newconnectionId,this.newconsumerno);
              
              this.ss.acceptrequest(this.newconnectionId).then((error:any)=>
              console.error(error));
              this.router.navigate(['/Admin/requestview']);
            });
          }
          
        }

        reject()
        {
          if(confirm("you want to reject?")){
            this.ss.rejectrequest(this.newconnectionId).then((error:any)=>
            console.error(error));
            this.router.navigate(['/Admin/requestview']);
  
        }
 }
}
  
  


