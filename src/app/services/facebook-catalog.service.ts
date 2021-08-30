import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ProductSet } from '@models/product-set.model';
import { Product } from '@models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Pagin = {
  cursors: {
    before: string,
    after: string
  },
  next: string,
  previous: string
}

type ProductRes = {
  data: Product[],
  paggin: Pagin,
  summary: {
    total_count: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class FacebookCatalogService {
  facebookURL = `https://graph.facebook.com/v11.0`;

  constructor(
    private http: HttpClient,
  ) {
  }

  obtenerProductos(): Observable<ProductRes> {
    const url = `${this.facebookURL}/${environment.FACEBOOK_PRODUCT_CATALOG_ID}/products?fields=id,name,description,price,image_url&access_token=${environment.FACEBOOK_API_TOKEN}`;
    return this.http.get<ProductRes>(url);
  }

  obtenerProductosBySetID(setID: number): Observable<Product[]> {
    const url = `${this.facebookURL}/${setID}?fields=id,name,product_count,products{id,name,description,price,image_url}&access_token=${environment.FACEBOOK_API_TOKEN}`;
    return this.http.get<{
      products: ProductRes,
      id: number,
      name: string,
      product_count: number
    }>(url).pipe(map(resp => resp.products.data));
  }

  obtenerProducto(id: number): Observable<Product> {
    const url = `${this.facebookURL}/${id}?fields=id,name,description,price,image_url&access_token=${environment.FACEBOOK_API_TOKEN}`;
    return this.http.get<Product>(url);
  }

  getProductSets(): Observable<ProductSet[]> {
    const url = `${this.facebookURL}/${environment.FACEBOOK_PRODUCT_CATALOG_ID}/product_sets?fields=id,name,product_count&limit=1000&summary=total_count&access_token=${environment.FACEBOOK_API_TOKEN}`;
    return this.http.get<{
      data: ProductSet[],
      summary: { total_count: number }
    }>(url).pipe(map(sets => {
      return sets.data.splice(0, sets.summary.total_count-2);
    }));
  }
}
