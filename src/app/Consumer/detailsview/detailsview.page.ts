import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.page.html',
  styleUrls: ['./detailsview.page.scss'],
})
export class DetailsviewPage {
  public profile: any[] = [];
  constructor(private ss:ServiceService) { }

  // ngOnInit() {
  // }
  ionViewDidEnter() {
    this.ss.getprofile().subscribe(res => {
      console.log(res);
      this.profile[0]= res;
    });
  }
}
