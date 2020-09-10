/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Component } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
})
export class CustomBannerComponent {
  data$: Observable<CmsBannerComponent> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<CmsBannerComponent>) {

  }
}