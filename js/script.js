// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const { createApp } = Vue;


createApp({
    data() {
      return {
        msg: 'Questo è il mio messaggio generato con il data',
        miaClasse: 'text-red'
      }
    }
  }).mount('#container');

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.