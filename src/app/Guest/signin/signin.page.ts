import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public valid = false;
  constructor(private fb:FormBuilder, private router:Router, private ss:ServiceService, private route: ActivatedRoute) { }
  consumerdata: any[] = [];
  public loginform=this.fb.group({
    username:['',Validators.required],
  password:['',Validators.required]
})
  ngOnInit() {
  }

  login() {
if(this.loginform.value.username=="admin")
{
  this.ss.adminlogin(this.loginform.value.username, this.loginform.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.consumerdata = res;
        if (this.consumerdata.length > 0) {
          alert("login successfully");
          this.router.navigate(['/Admin/index']);
        }
        else {
          alert("login failed");
          this.router.navigate(['/Guest/signin']);
        }
  
      });
  

}
else
{
    console.log(this.loginform.value);
    this.ss.consumerlogin(this.loginform.value.username, this.loginform.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.consumerdata = res;
        if (this.consumerdata.length > 0) {
          alert("login successfully");
          localStorage.setItem('consumerId',res[0].collection_consumerId);
          localStorage.setItem('name',this.consumerdata[0].name);
          this.router.navigate(['/Consumer/index']);
        }
        else {
          alert("login failed");
          this.router.navigate(['/Guest/signin']);
        }
  
      });
  }
}
}
