import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './components/auth-guard/auth-guard.component';
import { PrestitiComponent } from './components/prestiti/prestiti.component';

export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'prestiti', component: PrestitiComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // Redirect alla login di default
];
