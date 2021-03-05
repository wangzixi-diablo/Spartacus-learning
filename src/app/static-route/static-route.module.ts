import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { StaticRouteComponent } from './static.route.component';

const staticRoutes: Routes = [{
  path: 'static-page',
  component: StaticRouteComponent,
  canActivate: [CmsPageGuard]
}];

@NgModule({
  declarations: [StaticRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(staticRoutes)
  ]
})
export class StaticRouteModule { }
