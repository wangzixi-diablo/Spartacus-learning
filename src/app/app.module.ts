import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ActiveCartService, CartAddEntrySuccessEvent, CmsConfig, Config, ConfigModule, EventService } from '@spartacus/core';
import { B2cStorefrontModule, OutletRefModule, PageComponentModule, SearchBoxComponentService } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { CustomBannerModule } from './features/components/banner/banner.module';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyOutletsModule } from './my-outlets/my-outlets.module';
import { MycomComponent } from './mycom/mycom.component';
import { CustomerCartService } from './myService/my-cart.service';
import { CustomerSearchService } from './myService/mySearch.service';
import { StaticRouteModule } from './static-route/static-route.module';

export abstract class DebugConfig {
  logConfig: boolean;
}


declare module '@spartacus/core' {
  interface ConsentTemplate {
    documentUrl?: string;
  }
}

/*
declare module '@spartacus/core' {
  interface CostCenter {
    jerryExtension?: string;
  }
}*/

const ROUTING_FEATURE = 'Route';

export interface State {
  [ROUTING_FEATURE]: string;
}

/*

    */
@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    B2cStorefrontModule.withConfig({

      backend: {
        occ: {
          baseUrl: 'https://spartacus-dev2.eastus.cloudapp.azure.com:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {

        baseSite: ['electronics-spa'],
        urlParameters: ['baseSite', 'language', 'currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    }),
    CustomBannerModule,
    OutletRefModule,
    MyOutletsModule,
    PageComponentModule,
    ConfigModule.withConfig({
      logConfig: true
    } as DebugConfig
    ),
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: () =>
            import('./lazy/lazy-banner.component').then(
              (m) => m.LazyBanner
            ),
        },
        CartComponent: {
          component: () =>
            import('./my-cart/my-cart.component').then(
              (m) => m.MyCartComponent
            ),
        }
      } as CmsConfig
    }),
    CustomRoutingModule,
    StaticRouteModule,
    BrowserTransferStateModule
  ],
  providers: [{ provide: DebugConfig, useExisting: Config },
    /*{
      provide: CurrentProductService, useClass: MyCurrentProductService
    }*/,
  {
    provide: ActiveCartService, useClass: CustomerCartService
  },
  {
    provide: SearchBoxComponentService, useClass: CustomerSearchService
  },

  ],
  // { provide: ProductAdapter, useClass: MyProductAdapter }],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(events: EventService) {
    const result$ = events.get(CartAddEntrySuccessEvent);
    result$.subscribe((event) => console.log(event));
  }
}

