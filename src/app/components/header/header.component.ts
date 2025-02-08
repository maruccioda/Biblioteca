import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component'; // Importa il componente
import { NavVerticaleComponent } from '../nav-verticale/nav-verticale.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductComponent, NavVerticaleComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
