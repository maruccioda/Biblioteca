// filepath: /c:/Users/Utente/Desktop/.vscode/angular/Biblioteca/src/app/service/biblioteca.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private apiUrlLibri = 'http://localhost:3000/libri';
  private apiUrlPrestiti = 'http://localhost:3000/prestiti';
  constructor(private http: HttpClient) {}

  // Funzione asincrona per recuperare i dati
  async recuperaDati(): Promise<any> {
    try {
      return await lastValueFrom(this.http.get(this.apiUrlLibri));
    } catch (error) {
      console.error('Errore durante il recupero dei dati', error);
      throw error;
    }
  }
  async recuperaPrestiti(): Promise<any> {
    try {
      return await lastValueFrom(this.http.get(this.apiUrlPrestiti));
    } catch (error) {
      console.error('Errore durante il recupero dei prestiti', error);
      throw error;
    }
  }
}
