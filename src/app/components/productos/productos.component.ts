import { Component, OnInit } from '@angular/core';
import { ProductSet } from '@models/product-set.model';
import { Product } from '@models/product.model';
import { FacebookCatalogService } from '@services/facebook-catalog.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productSets$: Observable<ProductSet[]>;
  selectedSet: ProductSet | undefined;

  products$: Observable<Product[]>;

  constructor(
    private facebookCatalogService: FacebookCatalogService,
  ) { }

  ngOnInit(): void {
    this.productSets$ = this.facebookCatalogService.getProductSets();
    this.products$ = this.facebookCatalogService.obtenerProductos().pipe(map(resp => resp.data));
    this.facebookCatalogService.obtenerProductosBySetID(602723717400036).subscribe(console.log);
  }

  selectProductSet(productSet: ProductSet | undefined): void {
    if (productSet) {
      this.products$ = this.facebookCatalogService.obtenerProductosBySetID(productSet.id);
    } else {
      this.products$ = this.facebookCatalogService.obtenerProductos().pipe(map(resp => resp.data));
    }
  }
}
