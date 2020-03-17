import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortofolioPage } from './portofolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortofolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortofolioPageRoutingModule {}
