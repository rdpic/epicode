/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("ESERCIZIO 1");

function calcArea(l1, l2) {
    const rectangleArea = l1 * l2;

    return rectangleArea;
}

let width = 8;
let height = 5;
const area = calcArea(width, height);

console.log(area);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("ESERCIZIO 2");

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

console.log(crazySum(2, 2));
console.log(crazySum(2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("ESERCIZIO 3");

function crazyDiff(num) {
    const absoluteDifference = Math.abs(num - 19);
    
    if (num > 19) {
        return absoluteDifference * 3;
    } else {
        return absoluteDifference;
    }
}

console.log(crazyDiff(25));
console.log(crazyDiff(17));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("ESERCIZIO 4");

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    };
}

console.log(boundary(50));
console.log(boundary(200));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("ESERCIZIO 5");

function epify(inputString) {
    if (inputString.startsWith("EPICODE")) {
        return inputString;
    } else {
        return "EPICODE " + inputString;
    }
}

console.log(epify("Hello World!"));
console.log(epify("EPICODE JavaScript"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 6");

function check3and7(num) {
    if ((num % 3 === 0 ) || (num % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(6));
console.log(check3and7(14));
console.log(check3and7(21));
console.log(check3and7(5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("ESERCIZIO 7");

function reverseString(inputString) {
    return inputString.split('').reverse().join(''); // la String è un array di caratteri, per cui è possibile utilizzare questi metodi
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("ESERCIZIO 8");

function upperFirst(inputString){
    const wordsArray = inputString.toLowerCase().split(' ');

    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }

    const resultString = wordsArray.join(' ');

    return resultString;
}

console.log(upperFirst("heLLo worLd!"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("ESERCIZIO 9");

function cutString(inputString) {
    if (inputString.length >= 2) {
        return inputString.slice(1, -1);
      } else {
        return "";
      }
}

console.log(cutString("Hello World!"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("ESERCIZIO 10");

function giveMeRandom(n) {
    const randomNumbers = [];

    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

console.log(giveMeRandom(4));