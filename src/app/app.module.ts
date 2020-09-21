import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { CmsConfig, Config, ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule, OutletRefModule, PageComponentModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { CustomBannerModule } from './features/components/banner/banner.module';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyOutletsModule } from './my-outlets/my-outlets.module';
import { MycomComponent } from './mycom/mycom.component';

export abstract class DebugConfig {
  logConfig: boolean;
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
    BrowserModule,
    CommonModule,
    B2cStorefrontModule.withConfig({

      backend: {
        occ: {
          baseUrl: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002',
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
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: MycomComponent
        },
        CartComponent: {
          component: MyCartComponent
        }
      } as CmsConfig
    }),
    ConfigModule.withConfig({
      logConfig: true
    } as DebugConfig
    ),
    CustomRoutingModule
  ],
  providers: [{ provide: DebugConfig, useExisting: Config },
    /*{
      provide: CurrentProductService, useClass: MyCurrentProductService
    }*/
  ],
  // { provide: ProductAdapter, useClass: MyProductAdapter }],

  bootstrap: [AppComponent]
})
export class AppModule { }
