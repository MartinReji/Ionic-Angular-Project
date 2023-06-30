import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myconnections',
  templateUrl: './myconnections.page.html',
  styleUrls: ['./myconnections.page.scss'],
})
export class MyconnectionsPage {
  public connectiondata: any[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.getmyconnection().subscribe(res => {
      console.log(res);
      this.connectiondata = res;
    });
  }
  // ngOnInit() {
  // }

}
