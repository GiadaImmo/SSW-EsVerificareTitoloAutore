/*
  Provate a scrivere il codice per verificare titolo e autore di un certo volume contengono una certa sequenza di caratteri:
    - concatenate titolo e autore
    - convertite le maiuscole in minuscole
    - verificate la presenza della stringa
  I tre elementi (autore, titolo e stringa) possono essere contenuti in tre
  variabili. Cercate di scrivere un’unica riga per i tre passi precedenti,
  componendo le funzioni con il punto (.). Non utilizzate form per
  l’inserimento dei parametri, ma impostate i valori nelle variabili.
*/

// Import stylesheets
import './style.css';

// Write Javascript code!

let autore = 'Dante Alighieri'; // Nome Autore
let titolo = 'La Divina Commedia'; // Titolo Libro
let stringa = 'di'; // Ciò che inserisce l'utente

if ((autore + ' ' + titolo).toLowerCase().includes(stringa.toLowerCase())) {
  // alert(autore + ' "' + titolo + '"');
  // console.log(autore + ' "' + titolo + '"')
  document.getElementById('risultatoRicerca').innerHTML =
    autore + ' "' + titolo + '"';
} else {
  // alert('Autore e Libro non trovati');
  // console.log("Autore e Libro non trovati");
  document.getElementById('risultatoRicerca').innerHTML =
    'Autore e Libro non trovati';
}
