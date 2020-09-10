import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.scss']
})
export class MycomComponent implements OnInit {

  constructor(private data: CmsComponentData<any>
  ) {

  }

  ngOnInit(): void {
    this.data.data$.subscribe((data) => {
      // console.log(data);
    });
  }

}
