/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('ESERCIZIO 1');

const concatAndConvert = (string1, string2) => {
  const firstPart = string1.slice(0, 2);
  
  const secondPart = string2.slice(-3);
  
  const concatenatedString = firstPart + secondPart;
  
  const uppercasedString = concatenatedString.toUpperCase();
  
  console.log(uppercasedString);
};

concatAndConvert('hello', 'world');

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log('ESERCIZIO 2');

const generateRandomArray = () => {
  const randomArray = [];

  for (let i = 0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 101);
      randomArray.push(randomValue);
  }

  return randomArray;
};

console.log(generateRandomArray());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log('ESERCIZIO 3');

const getEvenNumbers = (array) => {
  const evenNumbers = array.filter(number => number % 2 === 0);
  
  return evenNumbers;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('ESERCIZIO 4');

const sumNumbers = (array) => {
  let sum = 0;

  array.forEach(number => {
      sum += number;
  });

  return sum;
};

console.log(sumNumbers(numbers));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('ESERCIZIO 5');

const sumNumbers2 = (array) => {
  const totalSum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
  }, 0);

  return totalSum;
};

console.log(sumNumbers2(numbers));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log('ESERCIZIO 6');

const incrementByN = (array, n) => {
  const newArray = array.map(number => number + n);
  
  return newArray;
};

let n = 2;

console.log(incrementByN(numbers, n));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ['EPICODE', 'is', 'great'] => [7, 2, 5]
*/

console.log('ESERCIZIO 7');

const getStringLengths = (array) => {
  const lengthsArray = array.map(string => string.length);
  
  return lengthsArray;
};

const strings = ['EPICODE', 'is', 'great'];

console.log(getStringLengths(strings));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('ESERCIZIO 8A'); // ciclo for

const getOddNumbersFor = () => {
  const oddNumbersArray = [];

  for (let i = 1; i <= 99; i += 2) {
      oddNumbersArray.push(i);
  }

  return oddNumbersArray;
};

const oddNumbersFor = getOddNumbersFor();

console.log(oddNumbersFor);

console.log('ESERCIZIO 8B'); // ciclo forEach

const getOddNumbersForEach = () => {
  const oddNumbersArray = [];
  const numbersArray = new Array(50).fill(0);
    
  numbersArray.forEach((_, index) => {
    oddNumbersArray.push(index * 2 + 1);
  });

  return oddNumbersArray;
};

const oddNumbersForEach = getOddNumbersForEach();
console.log(oddNumbersForEach);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log('ESERCIZIO 9');

const findOldestMovie = (movies) => {
  let oldestMovie = movies[0];

  movies.forEach(movie => {
      const currentYear = parseInt(movie.Year);
      const oldestYear = parseInt(oldestMovie.Year);

      if (currentYear < oldestYear) {
          oldestMovie = movie;
      }
  });

  return oldestMovie;
};

const oldestMovie = findOldestMovie(movies);

console.log(oldestMovie.Title + ', ' + oldestMovie.Year);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log('ESERCIZIO 10');

const countMovies = (movies) => {
  return movies.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log('ESERCIZIO 11');

const getMovieTitles = (movies) => {
  const titles = movies.map(movie => movie.Title);
  return titles;
};

console.log(getMovieTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log('ESERCIZIO 12');

const getMoviesInCurrentMillennium = (movies) => {
  const currentYear = new Date().getFullYear();

  const currentMillenniumMovies = movies.filter(movie => parseInt(movie.Year) >= 2000 && parseInt(movie.Year) <= currentYear);

  return currentMillenniumMovies;
};

console.log(getMoviesInCurrentMillennium(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log('ESERCIZIO 13');

const sumOfProductionYears = (movies) => {
  const totalYears = movies.reduce((accumulator, movie) => {
      return accumulator + parseInt(movie.Year);
  }, 0);

  return totalYears;
};

console.log(sumOfProductionYears(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log('ESERCIZIO 14');

const getMovieById = (movies, imdbID) => {
  const foundMovie = movies.find(movie => movie.imdbID === imdbID);

  return foundMovie;
};

const movieIdToFind = 'tt0120737';

console.log(getMovieById(movies, movieIdToFind));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

console.log('ESERCIZIO 15');

const getIndexOfFirstMovieInYear = (movies, year) => {
  const index = movies.findIndex(movie => movie.Year === year);

  return index;
};

const yearToFind = '2002';

console.log(getIndexOfFirstMovieInYear(movies, yearToFind));
