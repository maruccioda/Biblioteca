import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-verticale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-verticale.component.html',
  styleUrl: './nav-verticale.component.scss',
})
export class NavVerticaleComponent {
  generi = [
    // { link: "passa_categoria('all product')", titolo: 'Tutti' },
    { categoria: 'Romanzi', titolo: 'Romanzi' },
    { categoria: 'Crimini e Gialli', titolo: 'Crimini e gialli' },
    { categoria: 'Classici', titolo: 'Classici' },
    { categoria: 'Racconti', titolo: 'Racconti' },
    { categoria: 'Azione e Avventura', titolo: 'Azione e avventura' },
    { categoria: 'Storia', titolo: 'Storia' },
    { categoria: 'Biografie', titolo: 'Biografie' },
    { categoria: 'Fantasy', titolo: 'Fantasy' },
  ];
  passaLibri(categoria: string) {
    console.log('Categoria selezionata:', categoria);
  }
}
