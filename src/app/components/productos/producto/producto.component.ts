import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@models/product.model';
import { FacebookCatalogService } from '@services/facebook-catalog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  product$: Observable<Product>;
  productId: number;

  constructor(
    private facebookCatalogService: FacebookCatalogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.product$ = this.facebookCatalogService.obtenerProducto(this.productId);
  }

}
