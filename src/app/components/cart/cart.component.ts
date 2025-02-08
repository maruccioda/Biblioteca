// filepath: /c:/Users/Utente/Desktop/.vscode/angular/Biblioteca/src/app/components/cart/cart.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  libri: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('Carrello:', this.cartService.getList());
    this.libri = this.cartService.getList();
  }
}
