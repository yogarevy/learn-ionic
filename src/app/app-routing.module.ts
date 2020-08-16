import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'work-exp',
    loadChildren: () => import('./work-exp/work-exp.module').then( m => m.WorkExpPageModule)
  },
  {
    path: 'portofolio',
    loadChildren: () => import('./portofolio/portofolio.module').then( m => m.PortofolioPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
