import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.page.html',
  styleUrls: ['./work-exp.page.scss'],
})
export class WorkExpPage implements OnInit {
  dataWork: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.dataWork = true;
    }, 3000);
  }

}
