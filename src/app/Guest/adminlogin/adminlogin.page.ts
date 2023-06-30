import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { take } from 'rxjs/internal/operators/take';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  public valid = false;
  constructor(private fb:FormBuilder, private router:Router, private ss:ServiceService, private route: ActivatedRoute) { }
  admindata: any[] = [];
  public adminloginform=this.fb.group({
    username:[''],
  password:['']
})
  ngOnInit() {
  }
  loginsubmit() {
    console.log(this.adminloginform.value);
    this.ss.adminlogin(this.adminloginform.value.username, this.adminloginform.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.admindata = res;
        if (this.admindata.length > 0) {
          alert("login successfully");
          this.router.navigate(['/Admin/index']);
        }
        else {
          alert("login failed");
          this.router.navigate(['/Guest/adminlogin']);
        }
  
      });
  }
}
