import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-connectionrequest',
  templateUrl: './connectionrequest.page.html',
  styleUrls: ['./connectionrequest.page.scss'],
})
export class ConnectionrequestPage implements OnInit {
  
  typeId!: any;
  district:any[]=[];
  panchayath:any[]=[];
  constructor(private fb:FormBuilder,private router:Router,private ss:ServiceService,private datepipe:DatePipe,private route: ActivatedRoute) { this.route.paramMap
    // .pipe(take(1))
    .subscribe((params: ParamMap) => {
      this.typeId = params.get('id');
    });
     }

 
  currentdate:any;
  formatdate:any;
  regform!:FormGroup

  ngOnInit() {
    this.currentdate=new Date();
    this.formatdate=this.datepipe.transform(this.currentdate,'yyyy-MM-dd');
    this.regform = this.fb.group({
      consumerid:localStorage.getItem("consumerId"),
      consumernumber:0,
      housename:['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
      housenumber:['',Validators.required],
      place:['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
      districtname:['',Validators.required],
      panchayathname:['',Validators.required],
      pincode:['',[Validators.required,Validators.minLength(6)]],
      panchayathward:['',Validators.required],
      typename:this.typeId,
      requestdate:this.formatdate,
      status:'Pending'
    })
    this.ss.getdistrict().subscribe((data: any) => {
      this.district = data;
      console.log(data);
    });
  }
  view()
  {
    this.ss.getpanchayathbydistrict(this.regform.value.districtname).subscribe((data: any) => {
      this.panchayath = data;
      console.log(data);
    });
}
submit() 
  {
   console.log(this.regform.value);
   this.ss.AddConnection(this.regform.value).then(() => {
    alert("Registration Completed");
    this.router.navigate(['Consumer/index']);
  });
  }
}