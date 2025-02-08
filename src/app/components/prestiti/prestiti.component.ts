import { Component, OnInit } from '@angular/core';
// import { NavVerticaleComponent } from '../nav-verticale/nav-verticale.component';
import { BibliotecaService } from '../../service/biblioteca.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-prestiti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestiti.component.html',
  styleUrl: './prestiti.component.scss',
  providers: [DatePipe],
})
export class PrestitiComponent implements OnInit {
  prestitidapassare: any[] = [];

  constructor(
    private bibliotecaService: BibliotecaService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.bibliotecaService.recuperaPrestiti().then((data) => {
      const today = new Date();

      // Creiamo un oggetto per raggruppare i prestiti per ID utente
      const prestitiRaggruppati: { [key: string]: any } = {};

      data.forEach((prestito: any) => {
        const dataPrestito = new Date(prestito.data_prestito);
        const isOld =
          today.getTime() - dataPrestito.getTime() > 30 * 24 * 60 * 60 * 1000;
        const formattedDate = this.datePipe.transform(
          dataPrestito,
          'dd/MM/yyyy'
        );

        // Creiamo un identificatore unico per l'utente (può essere ID, nome + cognome, ecc.)
        const userId = `${prestito.id_account}-${prestito.Nome}-${prestito.Cognome}`;
        console.log('userid' + userId);
        if (!prestitiRaggruppati[userId]) {
          prestitiRaggruppati[userId] = {
            nome: prestito.Nome,
            cognome: prestito.Cognome,
            libri: [],
          };
        }

        // Aggiungiamo il libro alla lista dell'utente
        prestitiRaggruppati[userId].libri.push({
          titolo: prestito.Titolo,
          id: prestito.id_biblioteca,
          dataPrestito: formattedDate,
          isOld,
        });
      });
      console.log(prestitiRaggruppati);
      // Convertiamo l'oggetto in un array per l'uso con *ngFor
      this.prestitidapassare = Object.values(prestitiRaggruppati);
    });
  }
}
