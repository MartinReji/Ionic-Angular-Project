import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-detailsedit',
  templateUrl: './detailsedit.page.html',
  styleUrls: ['./detailsedit.page.scss'],
})
export class DetailseditPage implements OnInit {

  constructor(private ss: ServiceService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  public editdetails = this.fb.group(
    {
      name: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
      email: ['',[Validators.required,Validators.email]],
      contactnumber: ['',[Validators.required,Validators.minLength(10)]],
      aadharnumber: ['',Validators.required],
      password: ['',Validators.required]
    });
  ngOnInit() {
    // console.log(this.typeId);
    this.ss.getprofile().subscribe(res => {
      if(res){
        this.editdetails.patchValue(res);
      }
    });
  }

  update()
  {
    this.ss.editdetails(this.editdetails.value).then(() => {
      alert("Details Updated");
      this.router.navigate(['/Consumer/detailsview']);
    });
  }
}
