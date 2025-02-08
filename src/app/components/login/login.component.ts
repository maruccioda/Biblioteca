import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa CommonModule e FormsModule
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.result === 'true') {
          this.router.navigate(['/admin']); // Reindirizza alla pagina admin
        } else {
          this.error = 'Email o password errati'; // Mostra il messaggio di errore
        }
      },
      error: () => {
        this.error = 'Errore di connessione. Riprova più tardi.';
      },
    });
  }

  // ngAfterViewInit() {
  //   const btnMenuNavbar = document.getElementById('btn-menu-navbar');
  //   if (btnMenuNavbar) {
  //     btnMenuNavbar.style.display = 'none ';
  //   }
  // }
}
