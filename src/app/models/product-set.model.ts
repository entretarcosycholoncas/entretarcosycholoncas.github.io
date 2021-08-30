import { Product } from "./product.model";

export class ProductSet {
  constructor(
    public id: number,
    public name: string,
    public product_count: number,
    public products: {
      data: Product[],
      pagin: {
        cursors: {
          before: string,
          after: string,
        },
        next: string,
        previous: string
      }
    }
  ) {}
}
