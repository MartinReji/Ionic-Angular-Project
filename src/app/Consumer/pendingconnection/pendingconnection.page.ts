import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pendingconnection',
  templateUrl: './pendingconnection.page.html',
  styleUrls: ['./pendingconnection.page.scss'],
})
export class PendingconnectionPage {
  public connectiondata: any[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.getpendingconnection().subscribe(res => {
      console.log(res);
      this.connectiondata = res;
    });
  }
  // ngOnInit() {
  // }

}
