import { Component } from '@angular/core';
import { NavVerticaleComponent } from '../nav-verticale/nav-verticale.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavVerticaleComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
