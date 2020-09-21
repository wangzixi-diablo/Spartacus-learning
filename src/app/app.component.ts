import { Component, OnInit } from '@angular/core';
import { ContentSlotComponentData } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { DebugConfig } from './app.module';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })

export class AppComponent implements OnInit {
  constructor(private config: DebugConfig, private currentProductService: CurrentProductService) {
    console.log(config);
  }

  title = 'Jerry Store';

  myproduct$ = this.currentProductService.getProduct();

  componentMeta: ContentSlotComponentData = {
    uid: 'ElectronicsHomepageSplashBannerComponent',
    typeCode: 'SimpleResponsiveBannerComponent',
    flexType: 'SimpleResponsiveBannerComponent'
  };
  ngOnInit(): void {
    /*const factory = this.componentFactoryResolver.resolveComponentFactory(MycomComponent);
    this.outletService.add('header', factory, OutletPosition.BEFORE);*/
  }
}
