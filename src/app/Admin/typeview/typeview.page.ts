import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-typeview',
  templateUrl: './typeview.page.html',
  styleUrls: ['./typeview.page.scss'],
})
export class TypeviewPage {

  public typedata: any[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.gettype().subscribe(res => {
      console.log(res);
      this.typedata = res;
    });
  }
  delete(typeId: string): void
  {
    if(confirm("You want to delete")){
      this.ss.deletetype(typeId).then(
        (error: any) =>console.error(error)
      );
    }
    }
}
