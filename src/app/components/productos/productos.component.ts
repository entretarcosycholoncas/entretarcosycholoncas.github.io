import { Component, OnInit } from '@angular/core';
import { ProductImg, ProductsImgData } from './products-img.data';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  products = ProductsImgData;

  selectedProduc: ProductImg | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
