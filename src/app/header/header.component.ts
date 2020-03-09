import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  aktip = 0;
  constructor() { }
  
  ngOnInit() {
    let allUrl = window.location.href;
    let currentUrl = allUrl.replace('http://localhost:8100/','/')

    if (currentUrl==='/home' || currentUrl === '/') {
      this.aktip = 1;
    } else if(currentUrl==='/about') {
      this.aktip = 2;
    } else if(currentUrl==='/work-exp') {
      this.aktip = 3;
    } else if(currentUrl==='/portofolio') {
      this.aktip = 4;
    } else if(currentUrl==='/skills') {
      this.aktip = 5;
    } else {
      this.aktip = 6;
    }
  }

  menus = [
    {"id" : "1", "menu": "HI!", "route" : "/home"},
    {"id" : "2", "menu": "ABOUT ME", "route" : "/about"},
    {"id" : "3", "menu": "WORK EXPERIENCE", "route" : "/work-exp"},
    {"id" : "4", "menu": "PORTOFOLIO", "route" : "/portofolio"},
    {"id" : "5", "menu": "SKILLS", "route" : "/skills"},
    {"id" : "6", "menu": "CONTACT", "route" : "/contact"}
  ];

  clickMenu($event) {
    this.aktip = $event.id;
  }
}
