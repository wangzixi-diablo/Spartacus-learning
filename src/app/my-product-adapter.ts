import { Injectable } from '@angular/core';
import { Product, ProductAdapter, ScopedProductData } from '@spartacus/core';
import { Observable, of } from 'rxjs';

const PRODUCT = {
  code: '300938',
  name: 'Jerry Product'
};

@Injectable()
export class MyProductAdapter extends ProductAdapter {
  load(productCode: string, scope?: string): Observable<Product> {
    console.log('My product adapter called!');
    return of(PRODUCT);
  }
  loadMany?(products: ScopedProductData[]): ScopedProductData[] {
    console.log('My product adapter loadMany called!');
    return [{ code: '300938', scope: '', data$: of(PRODUCT) } as ScopedProductData];
  }
}
