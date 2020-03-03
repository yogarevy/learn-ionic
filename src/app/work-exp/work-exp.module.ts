import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkExpPageRoutingModule } from './work-exp-routing.module';

import { WorkExpPage } from './work-exp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkExpPageRoutingModule
  ],
  declarations: [WorkExpPage]
})
export class WorkExpPageModule {}
