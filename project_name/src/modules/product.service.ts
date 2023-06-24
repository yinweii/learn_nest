/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private prods: Product[] = [
    { id: 1, productName: 'Phonght', price: 20, categoryId: 2 },
    { id: 3, productName: 'Phonght 1', price: 20, categoryId: 20 },
    { id: 2, productName: 'Phonght 3', price: 20, categoryId: 27 },
  ];
  getProduct(): Product[] {
    return this.prods;
  }

  createProduct(): String {
    return 'CREATE NEW PRODUCT';
  }

  detailProduct(id: number): Product {
    return this.prods.find((item) => item.id === Number(id));
  }

  updateProduct(): String {
    return 'Update product';
  }

  deleteProduct(): String {
    return 'Delete product';
  }
}
