import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkExpPage } from './work-exp.page';

const routes: Routes = [
  {
    path: '',
    component: WorkExpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExpPageRoutingModule {}
