import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaModule } from '@spartacus/storefront';
import { CustomBannerComponent } from './banner.component';

@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    MediaModule
  ],
  entryComponents: [CustomBannerComponent],
})
export class CustomBannerModule { }