import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  request: any[] = [];
requestlength:any;
  sessionlength: any;
  constructor(private ss:ServiceService,private router:Router) { }

  ngOnInit() {
    this.ss.getrequest().pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      this.requestlength = data.length;
      this.sessionlength=localStorage.getItem('sessionlength');
      // if(this.sessionlength)
      // {
      //   console.log("dfgfgjh");
        if(this.requestlength>this.sessionlength)
        {
          this.playsound();
          if(confirm("New Request Arrived")){
            this.router.navigate(['/Admin/requestview']); 
          }
        }
      // } 
      else
      {
        localStorage.setItem('sessionlength',this.requestlength);
      }    
    });
  }

  playsound()
  {
    let audio= new Audio;
    audio.src="../../../assets/mixkit-musical-alert-notification-2309.wav";
    audio.load();
    audio.play();
    // alert("New Candidate added");
    localStorage.setItem('sessionlength',this.requestlength)
  }
}
