import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { BibliotecaService } from '../../service/biblioteca.service';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  prodotti: any[] = []; // Array per i prodotti
  libri: any[] = []; // Array per i prestiti

  constructor(
    private productService: ProductService,
    private bibliotecaService: BibliotecaService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // Recupera i prodotti dal servizio ProductService
    this.prodotti = this.productService.getList();

    // Recupera i liri dal servizio BibliotecaService
    this.bibliotecaService.recuperaDati().then((data) => (this.libri = data));
    // console.log('Libri:', this.libri);
  }

  pushProduct(prodotto: any) {
    console.log('Prodotto aggiunto al carrello:', prodotto);
    this.cartService.pushProdotto(prodotto); // logica per aggiungere il prodotto al carrello
  }
}
