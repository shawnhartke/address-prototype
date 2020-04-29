import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { GetStartedComponent } from './get-started/get-started.component';


const routes: Routes = [
  {
    path: 'apply/basic-info',
    component: BasicInfoComponent,
    pathMatch: 'full'
  },
    {
    path: 'apply/get-started',
    component: GetStartedComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
