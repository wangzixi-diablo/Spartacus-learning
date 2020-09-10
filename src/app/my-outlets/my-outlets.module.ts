import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletRefModule } from '@spartacus/storefront';
import { MyOutletsComponent } from './my-outlets.component';


@NgModule({
    declarations: [MyOutletsComponent],
    imports: [CommonModule, OutletRefModule],
    exports: [MyOutletsComponent]
})
export class MyOutletsModule { }
