import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public Guest = [
    { title: 'SignUp', url: 'Guest/signup', icon: 'paper-plane' },
    { title: 'Login', url: 'Guest/signin', icon: 'heart' }
  ];
  public Admin = [
    { title: 'Home', url: 'Admin/index', icon: 'home' },
    { title: 'Type Registration', url: 'Admin/typeregistration', icon: 'pencil' },
    { title: 'Type View', url: 'Admin/typeview', icon: 'git-branch' },
    { title: 'Panchayath Registration', url: 'Admin/panchayathregistration', icon: 'create' },
    { title: 'Panchayath View', url: 'Admin/panchayathview', icon: 'location' },
    { title: 'Requests View', url: 'Admin/requestview', icon: 'person-add' },
    { title: 'Monthly Reading', url: 'Admin/monthlyreading', icon: 'calendar' },
    { title: 'Report', url: 'Admin/report', icon: 'file-tray-full' },
    { title: 'Log Out', url: 'Guest/signin', icon: 'log-out' }
  ];
  public Consumer = [
    { title: 'Home', url: 'Consumer/index', icon: 'home' },
    { title: 'Personal Details', url: 'Consumer/detailsview', icon: 'person-circle' },
    { title: 'My Connections', url: 'Consumer/myconnections', icon: 'flash' },
    { title: 'Monthly Reading View', url: 'Consumer/monthlyreadingview', icon: 'reader' },
    { title: 'Log Out', url: 'Guest/signin', icon: 'log-out' }
  ];

  public sidemenutitle='';
public menuitems:any;
public name:any;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url.includes('Admin/'))
        {
         this.menuitems=this.Admin;
         this.sidemenutitle='Admin Dashboard';
         this.name='';

        }
        if(this.router.url.includes('Guest/'))
        {
         this.menuitems=this.Guest;
         this.sidemenutitle='Guest Dashboard';
         this.name='';

        }
        if(this.router.url.includes('Consumer/'))
        {
         this.menuitems=this.Consumer;
         this.sidemenutitle='Hi, ';
         this.name=localStorage.getItem("name");
         

        }
      }
    });
  }

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
}
