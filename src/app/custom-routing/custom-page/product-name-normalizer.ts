import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class ProductNameNormalizer implements Converter<Occ.Product, Product>{

    jerry = 'Hello';
    // source: backend structure, target: frontend structure
    convert(source: Occ.Product, target?: any): Product {
        console.log('20201122 in product convert');
        if (!!source.name) {
            target.nameForUrl = source.name.replace(/ /g, '-').toLocaleLowerCase();
        }
        return target;
    }
}
