import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-requestview',
  templateUrl: './requestview.page.html',
  styleUrls: ['./requestview.page.scss'],
})
export class RequestviewPage {
  request: any[] = [];

  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.getrequest().subscribe((data: any) => {
      this.request = data;
      console.log(data);
    });
  }

}
