import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-rejectedconnection',
  templateUrl: './rejectedconnection.page.html',
  styleUrls: ['./rejectedconnection.page.scss'],
})
export class RejectedconnectionPage {
  public connectiondata: any[] = [];

  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.getregectedconnection().subscribe(res => {
      console.log(res);
      this.connectiondata = res;
    });
  }
  // ngOnInit() {
  // }

}
