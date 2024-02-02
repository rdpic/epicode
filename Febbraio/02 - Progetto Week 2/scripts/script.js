/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];

/* console.log("ESERCIZIO 1");

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
} */

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/* console.log("ESERCIZIO 2");

const sortedPets = pets.sort();

console.log(sortedPets); */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/* console.log("ESERCIZIO 3");

const reversedPets = pets.reverse();

console.log(reversedPets); */

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* console.log("ESERCIZIO 4");

const firstPet = pets.shift();

pets.push(firstPet);

console.log(pets); */

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

/* console.log("ESERCIZIO 5A");

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'AA000ZZ';
} */

/* console.log("ESERCIZIO 5B");

const licensePlates = ['AA000ZZ', 'BB111YY', 'CC222XX'];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlates[i];
}

console.log(cars); */

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

/* console.log("ESERCIZIO 6");

const newCar = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'silver',
  trims: ['standard', 'LE', 'XSE'],
};

cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.length - 1;
  cars[i].trims.pop();
}

console.log(cars); */

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

/* const justTrims = [];

console.log("ESERCIZIO 7");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0]);
  }
}

console.log(justTrims); */

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* console.log("ESERCIZIO 8");

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0).toLowerCase();

  if (firstLetter === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
} */

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

/* const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("ESERCIZIO 9");

let i = 0;

while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
} */

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/* const charactersArray = ['g', 'n', 'u', 'z', 'd']

console.log("ESERCIZIO 10");

const alphabetPositionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i].toLowerCase();

  switch (char) {
    case 'a':
      alphabetPositionArray.push(1);
      break;
    case 'b':
      alphabetPositionArray.push(2);
      break;
    case 'c':
      alphabetPositionArray.push(3);
      break;
    case 'd':
      alphabetPositionArray.push(4);
      break;
    case 'e':
      alphabetPositionArray.push(5);
      break;
    case 'f':
      alphabetPositionArray.push(6);
      break;
    case 'g':
      alphabetPositionArray.push(7);
      break;
    case 'h':
      alphabetPositionArray.push(8);
      break;
    case 'i':
      alphabetPositionArray.push(9);
      break;
    case 'j':
      alphabetPositionArray.push(10);
      break;
    case 'k':
      alphabetPositionArray.push(11);
      break;  
    case 'l':
      alphabetPositionArray.push(12);
      break;
    case 'm':
      alphabetPositionArray.push(13);
      break;
    case 'n':
      alphabetPositionArray.push(14);
      break;
    case 'o':
      alphabetPositionArray.push(15);
      break;
    case 'p':
      alphabetPositionArray.push(16);
      break;
    case 'q':
      alphabetPositionArray.push(17);
      break;
    case 'r':
      alphabetPositionArray.push(18);
      break;
    case 's':
      alphabetPositionArray.push(19);
      break;
    case 't':
      alphabetPositionArray.push(20);
      break;
    case 'u':
      alphabetPositionArray.push(21);
      break;
    case 'v':
      alphabetPositionArray.push(22);
      break;
    case 'w':
      alphabetPositionArray.push(23);
      break;
    case 'x':
      alphabetPositionArray.push(24);
      break;
    case 'y':
      alphabetPositionArray.push(25);
      break;
    case 'z':
      alphabetPositionArray.push(26);
      break;
    default:
      alphabetPositionArray.push(null);
      break;
  }
}

console.log(alphabetPositionArray); */