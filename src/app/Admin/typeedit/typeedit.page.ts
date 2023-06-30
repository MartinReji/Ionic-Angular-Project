import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-typeedit',
  templateUrl: './typeedit.page.html',
  styleUrls: ['./typeedit.page.scss'],
})
export class TypeeditPage implements OnInit {

  public valid = false;
  typeId!: any;
  constructor(private ss: ServiceService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) {
    this.route.paramMap
      // .pipe(take(1))
      .subscribe((params: ParamMap) => {
        this.typeId = params.get('id');
      });
  }
  public editform = this.fb.group(
    {
      typename: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]],
      connectionamount: ['',Validators.required],
      unitamount: ['',Validators.required],
      limit: ['',Validators.required],
      fineamount: ['',Validators.required],
      description: ['',[Validators.required,Validators.pattern(/^[A-Z][a-z]+$/)]]
    });

  ngOnInit() {
    console.log(this.typeId);
    this.ss.gettypebyid(this.typeId).subscribe(res => {
      if(res){
        this.editform.patchValue(res);
      }
    });
  }
  update()
  {
    this.ss.edittype(this.typeId,this.editform.value).then(() => {
      alert("Details Updated");
      this.router.navigate(['/Admin/typeview']);
    });
  }

}
