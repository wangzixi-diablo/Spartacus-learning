import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigModule, OccConfig, RoutingConfig } from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { CustomPageComponent } from './custom-page/custom-page.component';

const CUSTOM_ROUTES: Routes = [
  { path: 'custom', component: CustomPageComponent, canActivate: [CmsPageGuard] },
  {
    path: 'faq-alias', component: PageLayoutComponent, canActivate: [CmsPageGuard],
    data: {
      pageLabel: 'faq'
    }
  }
]

@NgModule({
  declarations: [CustomPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOM_ROUTES),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'jerrycamera/:manufacturer/:name/:productCode',
              'cameras/:name/:productCode']
          }
        }
      }
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch:
              // tslint:disable-next-line: max-line-length
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    } as OccConfig)
  ]
})
export class CustomRoutingModule { }
