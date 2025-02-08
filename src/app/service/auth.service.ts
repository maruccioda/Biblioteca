import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = 'http://localhost/checkUtenti.php';
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkSession(); // Controlla la sessione al caricamento
  }

  login(email?: string, password?: string): Observable<any> {
    const requestBody =
      email && password ? { mail: email, password: password } : {};

    return this.http
      .post<any>(this.endpoint, requestBody, { withCredentials: true })
      .pipe(
        tap((response) => {
          if (response.result === 'true') {
            this.authStatus.next(true);
            this.router.navigate(['/admin']);
          } else {
            this.authStatus.next(false);
          }
        }),
        catchError((error) => {
          return throwError(
            () => new Error('Errore di connessione. Riprova più tardi.')
          );
        })
      );
  }

  checkSession() {
    this.login().subscribe({
      next: (response) => {
        if (response.result === 'true') {
          this.authStatus.next(true);
        } else {
          this.authStatus.next(false);
        }
      },
      error: () => {
        this.authStatus.next(false);
      },
    });
  }

  isLoggedIn(): boolean {
    return this.authStatus.value;
  }

  // Metodo per fare il logout
  logout(): void {
    document.cookie =
      'sessionUUID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }
}
