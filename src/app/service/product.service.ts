import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getList(): any[] {
    let products = [
      {
        picture: '../../../assets/pianta_maresciallo-removebg-preview.png',
        name: 'a',
        description: 'a',
        price: '1',
      },
      { picture: '', name: 'b', description: 'b', price: '2' },
      { picture: '', name: 'c', description: 'c', price: '3' },
    ];
    return products;
  }
}
