import { Injectable } from '@angular/core';
import { SearchBoxComponentService, SearchBoxConfig } from '@spartacus/storefront';

@Injectable()
export class CustomerSearchService extends SearchBoxComponentService {
    search(query: string, config: SearchBoxConfig): void {
        super.search(query, config);
        console.log('20201122 search: ' + query + ' with config: '
            + config);
    }
}
