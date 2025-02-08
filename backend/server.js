const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurazione connessione al database
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "scuola2",
});

db.connect((err) => {
  if (err) {
    console.error("Errore di connessione al database:", err);
    return;
  }
  console.log("Connesso a MySQL");
});

// Endpoint per ottenere tutti i prestiti
app.get("/prestiti", (req, res) => {
  db.query(
    "SELECT utenti.id_account, utenti.Nome , utenti.Cognome, prestiti.id_prestito, prestiti.data_prestito, biblioteca.Titolo, biblioteca.id_biblioteca FROM biblioteca, utenti, prestiti WHERE prestiti.id_utente=utenti.id_account AND prestiti.id_libro=biblioteca.id_biblioteca",
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    }
  );
});
app.get("/libri", (req, res) => {
  db.query("SELECT * FROM biblioteca", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// API per recuperare libri filtrati per genere
app.get("/libri/recupera/genere/:genere", (req, res) => {
  const genereRichiesto = req.params.genere.toLowerCase(); // Converte il genere in minuscolo per evitare problemi di case-sensitive
  let query = "SELECT * FROM biblioteca WHERE Genere = ?";
  db.query(query, [genereRichiesto], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint per aggiungere un utente
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        message: "Utente aggiunto con successo",
        id: result.insertId,
      });
    }
  );
});

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
