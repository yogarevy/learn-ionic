import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortofolioPageRoutingModule } from './portofolio-routing.module';

import { PortofolioPage } from './portofolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortofolioPageRoutingModule
  ],
  declarations: [PortofolioPage]
})
export class PortofolioPageModule {}
