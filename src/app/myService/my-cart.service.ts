import { Injectable } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';

@Injectable()
export class CustomerCartService extends ActiveCartService {
    addEntry(productCode: string, quantity: number): void {
        super.addEntry(productCode, quantity);
        console.log('20201122 add entry to cart: ' +
            productCode + ' quantity: ' + quantity);
    }
}
