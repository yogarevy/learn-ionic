import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  menus = [
    {"id" : "1", "menu": "HI!", "route" : "/home"},
    {"id" : "2", "menu": "ABOUT ME", "route" : "/about"},
    {"id" : "3", "menu": "WORK EXPERIENCE", "route" : "/work_exp"},
    {"id" : "4", "menu": "PORTOFOLIO", "route" : "/portofolia"},
    {"id" : "5", "menu": "SKILLS", "route" : "/skills"},
    {"id" : "6", "menu": "CONTACT", "route" : "/contact"}
  ];

  aktip = 1;

  clickMenu(e) {
    this.aktip = e.id;
    console.log(this.aktip);
  }
}
