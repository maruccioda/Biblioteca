import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selected: any[] = [];

  constructor() {}

  pushProdotto(p: any) {
    this.selected.push(p);
    console.log('prodotti aggiunti al carrelloservice', this.selected);
  }
  getList(): any[] {
    return this.selected;
  }
}
