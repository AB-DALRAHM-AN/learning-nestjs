import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Product } from 'interfaces';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'First Book',
    },
    {
      id: 2,
      title: 'Second Book',
    },
    {
      id: 3,
      title: 'Third Book',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    if (!id || !this.products.find((product) => product.id === +id)) {
      return 'No product found';
    }
    return this.products.find((product) => product.id === +id);
  }

  deleteProducts(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === +id,
    );
    if (productIndex === -1) {
      return 'No product found';
    }

    this.products.splice(productIndex, 1);

    return {
      message: 'Product deleted',
      Products: this.products,
    };
  }

  addProduct(body: { title: string }) {
    const lastProductId = this.products[this.products.length - 1].id;
    const newProduct = {
      id: lastProductId + 1,
      title: body.title,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(body: { title: string }, id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === +id,
    );
    if (productIndex === -1) {
      return 'No product found';
    }
    this.products[productIndex].title = body.title;
    return {
      message: 'Product updated',
      product: this.products[productIndex],
    };
  }
}
