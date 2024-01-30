/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let num1 = 10;
let num2 = 11;

if (num1 > num2) {
  console.log(num1 + " is bigger than " + num2);
} else if (num1 < num2) {
  console.log(num1 + " is smaller than " + num2);
} else {
  console.log("The two numbers are equal.");
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let num = 10;

if (num !== 5) {
  console.log("Not equal");
} else {
  console.log("Equal");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let num = 10;

if (num % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 5");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let num1 = 1;
let num2 = 7;

if (num1 === 8 || num2 === 8) {
  console.log("One or both numbers are equal to 8");
} else if (num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log("The sum or subtraction of the two numbers is equal to 8");
} else {
  console.log("None of the required conditions are met.");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 51;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Total: " + totalShoppingCart);
  console.log("Shipping will be for free.");
} else {
  let totalWithShipping = totalShoppingCart + shippingCost;

  console.log("Total: " + totalShoppingCart);
  console.log("Shipping cost will be added to the total.");
  console.log("New total: " + totalWithShipping)
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 11;
let shippingCost = 10;
let isBlackFriday = true;
let discountedTotal = totalShoppingCart * 0.8;

if (totalShoppingCart > 50) {
  console.log("Total: " + totalShoppingCart);
  console.log("Shipping will be for free.");
  
  if (isBlackFriday) {
    console.log("It's Black Friday! 20% discount will be applied to the total.");
    console.log("New total: " + discountedTotal);
  }

} else {
  let totalWithShipping = totalShoppingCart + shippingCost;

  console.log("Total: " + totalShoppingCart);

  if (isBlackFriday) {
    console.log("It's Black Friday! 20% discount will be applied to the total.");
  }

  console.log("Shipping cost will be added to the total.");
  console.log("New total: " + totalWithShipping * 0.8);
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 >= num2 && num1 >= num3) {

  if (num2 >= num3) {
      console.log(num1, num2, num3);
  } else {
      console.log(num1, num3, num2);
  }

} else if (num2 >= num1 && num2 >= num3) {
  
  if (num1 >= num3) {
      console.log(num2, num1, num3);
  } else {
      console.log(num2, num3, num1);
  }

} else {
  
  if (num1 >= num2) {
      console.log(num3, num1, num2);
  } else {
      console.log(num3, num2, num1);
  }

} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let val = 1;

if (typeof val === 'number') {
    console.log("The value is a number.");
} else {
    console.log("The value is NaN.");
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let num = 1;

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
} */

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

/* let val = 1;

if (val < 5) {
    console.log("Less than 5");
} else if (val < 10) {
    console.log("Less than 10");
} else {
    console.log("More than 10 or equal to 10");
} */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me); */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me.lastName;

console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.skills.pop(); // in alternativa c'è splice() dove si specifica indice dell'elemento dell'array dove partire e numero di elementi da eliminare

console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* const arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10); // si dovrebbe fare col ciclo for, lo metto qui sotto

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr[arr.length - 1] = 100; // -1 perché l'indice di un array parte da 0

console.log(arr); */z
