import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Importa il componente
import { CommonModule } from '@angular/common'; // Importa il modulo
import { ProductComponent } from './components/product/product.component'; // Importa il componente
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ProductComponent,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
  ], // Aggiungi il componente alle importazioni
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Biblioteca';

  constructor(private router: Router) {}

  mostraNav(): boolean {
    return this.router.url === '/home' || this.router.url === '/admin';
  }
}
