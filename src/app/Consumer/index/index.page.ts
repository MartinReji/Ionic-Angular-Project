import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  public typedata: any[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.gettype().subscribe(res => {
      console.log(res);
      this.typedata = res;
    });
  }

}
