import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-outlets',
  templateUrl: './my-outlets.component.html',
  styleUrls: ['./my-outlets.component.scss']
})
export class MyOutletsComponent implements OnInit {

  product$: Observable<Product> = this.currentProductService.getProduct();
  constructor(private currentProductService: CurrentProductService) {
  }

  ngOnInit(): void {
  }

}
