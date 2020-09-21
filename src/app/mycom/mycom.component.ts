import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable, OperatorFunction } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.scss']
})
export class MycomComponent implements OnInit {

  jerryfilter: OperatorFunction<Product, Product> =
    filter(this.jerrytest2);

  product$: Observable<Product> = this.currentProductService.getProduct().pipe(this.jerryfilter);

  jerrymap: OperatorFunction<Product, string> =
    map(product => product.name);

  jerrymap2: OperatorFunction<Product, string> =
    map(this.jerryMapOperation);

  JerryOrderEntry$: Observable<OrderEntry[]> = this.cartService.getEntries();

  jerryMapOperation(product: Product): string {
    return product.name;
  }

  quantity$: Observable<any> = this.product$.pipe(switchMap(product => this.cartService.getEntry(product.code)),
    filter(entry => !!entry),
    map(entry => entry.quantity));

  productName$ = this.product$.pipe(this.jerrymap2);


  jerrytest2(product: Product): boolean {
    const result = !!product;
    if (result === false) {
      console.log('false!');
    }
    return result;
  }

  constructor(private currentProductService: CurrentProductService, private cartService: ActiveCartService
  ) {
  }

  ngOnInit(): void {
    this.product$.subscribe(product => console.log(product));
  }

}
