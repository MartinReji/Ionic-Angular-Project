import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-panchayathview',
  templateUrl: './panchayathview.page.html',
  styleUrls: ['./panchayathview.page.scss'],
})
export class PanchayathviewPage implements OnInit {
  district:any[]=[];
  panchayath:any[]=[];
  constructor(private fb:FormBuilder,private ss:ServiceService) { }
  public viewpanchayath = this.fb.group({
    districtname: [''] 
  })

  ngOnInit() {
    this.ss.getdistrict().subscribe((data: any) => {
      this.district = data;
      console.log(data);
    });
    this.ss.getpanchayath().subscribe((data: any) => {
      this.panchayath = data;
      console.log(data);
    });
  }
  view()
  {
    this.ss.getpanchayathbydistrict(this.viewpanchayath.value.districtname).subscribe((data: any) => {
      this.panchayath = data;
      console.log(data);
    });
  }
  delete(panchayathId:any)
  {
    if(confirm("You want to delete")){
      this.ss.deletepanchayath(panchayathId).then(
        (error: any) =>console.error(error)
      );
    }
    }
}
