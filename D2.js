/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 5;
const num2 = 12;

if (num1 > num2) {
  console.log("num1 è più grande di num2");
} else if (num1 < num2) {
  console.log("num2 è più grande di num1");
} else {
  console.log("num1 è uguale a num2");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num3 = 14;

if (num3 !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num4 = 15;

if (num4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5 = 5;
const num6 = 3;

if (num5 === 8 || num6 === 8) {
  console.log("Almeno una delle due variabili ha valore 8");
} else if (num5 + num6 === 8 || num5 - num6 === 8) {
  console.log("La somma/sottrazione delle due variabili ha valore 8");
} else {
  console.log("condizione non verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 67;
let shippingCost = 10;
let paidCost;

/* if ((totalShoppingCart) < 50) {
  paidCost = totalShoppingCart + shippingCost
} else {
  paidCost = totalShoppingCart
}

console.log(paidCost); */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blackFriday = totalShoppingCart * 0.2;

if (totalShoppingCart - blackFriday < 50) {
  paidCost = totalShoppingCart + shippingCost;
} else {
  paidCost = totalShoppingCart;
}

console.log(paidCost);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 2;
const b = 12;
const c = 4;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b >= a && b >= c) {
  if (c >= a) {
    console.log(b, c, a);
  } else {
    console.log(b, a, c);
  }
} else {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (typeof a === "number") {
  // a era la variabile dichiarata nell'esercizio precedente
  console.log(typeof a);
} else {
  console.log("it's not a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (b % 2 === 0) {
  console.log("b è un numero pari");
} else {
  console.log("b è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val >= 5 && val < 10) {
    console.log("Compreso tra 5 e 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

  
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const scale = []

scale.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(scale);

// Avremmo potuto anche usare un ciclo for: 

// for (let i = 1; i <= 10, i++) {
// scale.push(i)
// }

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

scale.splice (9, 1, 100)

console.log(scale);
