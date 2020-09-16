import { Component, OnInit } from '@angular/core';
import { ProductNameNormalizer } from './product-name-normalizer';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent implements OnInit {

  constructor(private productNameNormalizer: ProductNameNormalizer) {
  }

  ngOnInit(): void {
  }

}
