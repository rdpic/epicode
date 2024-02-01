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

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log("EXTRA 1");

function checkArray(randomNumbers) {
    let sumGreaterThan5 = 0;

    for (let i = 0; i < randomNumbers.length; i++) {
        const currentNumber = randomNumbers[i];
    
        if (currentNumber > 5) {
            console.log(currentNumber + " is greater than 5.");
            sumGreaterThan5 += currentNumber;
        } else {
            console.log(currentNumber + " is not greater than 5.");
        }
      }
    
      return sumGreaterThan5;
}

console.log(checkArray(giveMeRandom(4)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log("EXTRA 2");

const shoppingCart = [
    { id: 1, name: 'Product A', price: 10, quantity: 2 },
    { id: 2, name: 'Product B', price: 15, quantity: 1 },
    { id: 3, name: 'Product C', price: 20, quantity: 3 },
];  

function shoppingCartTotal(shoppingCart) {
    let totalAmount = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];

        if (product && typeof product === 'object' && 'price' in product && 'quantity' in product) {
            totalAmount += product.price * product.quantity;
        } else {
            console.error("Invalid product in the shopping cart.");
            totalAmount = 0;
            break;
        }
    }

    return totalAmount;
}

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* console.log("EXTRA 3 V1");

function addToShoppingCart(newProduct, shoppingCart) {
    if (newProduct && typeof newProduct === 'object' && 'price' in newProduct && 'quantity' in newProduct) {
        shoppingCart.push(newProduct);
        return shoppingCart.length;
    } else {
        console.error("Invalid new product.");
        return shoppingCart.length;
    }
}

const newProduct = { id: 4, name: 'Product D', price: 30, quantity: 1 };

console.log(addToShoppingCart(newProduct, shoppingCart)); */

console.log("EXTRA 3 V2");

function addToShoppingCart2(...newProducts) {
    
    for (const newProduct of newProducts) {
        if (newProduct && typeof newProduct === 'object' && 'price' in newProduct && 'quantity' in newProduct) {
            shoppingCart.push(newProduct);
        } else {
            console.error("Invalid new product: " + newProduct);
        }
    }
  
    return shoppingCart.length;
}

const newProducts = addToShoppingCart2(
    { id: 4, name: 'Product D', price: 30, quantity: 1 },
    { id: 5, name: 'Product E', price: 5, quantity: 6 },
    { id: 6, name: 'Product F', price: 1, quantity: 3 }
);

console.log(newProducts);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("EXTRA 4");

function maxShoppingCart(shoppingCart) {
    if (shoppingCart.length === 0) {
        console.error("Shopping cart is empty.");
        return null;
    }
  
    let maxProduct = shoppingCart[0];
  
    for (const product of shoppingCart) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    }
  
    return maxProduct;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log("EXTRA 5");

function latestShoppingCart(shoppingCart) {
    if (shoppingCart.length === 0) {
        console.error("Shopping cart is empty.");
        return null;
    }
  
    return shoppingCart[shoppingCart.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("EXTRA 6");

function loopUntil(x) {
    if (x < 0 || x > 9) {
        console.error("The provided number must be between 0 and 9.");
        return;
    }
  
    let consecutiveGreater = 0;
  
    while (consecutiveGreater < 3) {
        const randomNumber = Math.floor(Math.random() * 10);
  
        console.log("Random Number:", randomNumber);
    
        if (randomNumber > x) {
            consecutiveGreater++;
        } else {
            consecutiveGreater = 0;
        }
    }

    return "Loop completed.";
}

console.log(loopUntil(2));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("EXTRA 7");

const numbers = [10, '20', 30, 'forty', 50, 99, null];

function average(arr) {
    const numericValues = arr.filter(function(value) {
        return typeof value === 'number' && !isNaN(value);
    });
    const sum = numericValues.reduce(function(acc, value) {
        return acc + value;
    }, 0);
    const avg = numericValues.length === 0 ? 0 : sum / numericValues.length;
  
    return avg;
}

console.log(average(numbers));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log("EXTRA 8");

const strings = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];

function longest(arr) {
    if (arr.length === 0) {
        console.error("The array is empty.");
        return null;
    }
  
    let longestString = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
        const currentString = arr[i];
  
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }
  
    return longestString;
}

console.log(longest(strings));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log("EXTRA 9");

function isNotSpam(emailContent) {
    const spamWords = ['SPAM', 'SCAM'];
    const lowercasedContent = emailContent.toLowerCase();
    
    for (const spamWord of spamWords) {
        if (lowercasedContent.includes(spamWord.toLowerCase())) {
            return false;
        }
    }

    return true;
}

const emailContent1 = "Important information";
const emailContent2 = "Get rich quick! SCAM alert";

console.log(isNotSpam(emailContent1));
console.log(isNotSpam(emailContent2));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

console.log("EXTRA 10");

function calcDaysPassed(targetDate) {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
}

const targetDate = new Date("2023-02-01");

console.log(calcDaysPassed(targetDate));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("EXTRA 11");

function matrixGenerator(x, y) {
    const matrix = [];
  
    for (let i = 0; i < x; i++) {
        let row = [];
  
        for (let j = 0; j < y; j++) {
            row.push(i.toString() + j.toString());
        }

        matrix.push(row);
    }
  
    return matrix;
}

console.log(matrixGenerator(3, 2));