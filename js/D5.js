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
const pets = ['dog', 'cat', 'hamster', 'redfish']

function arrayElements(array) {
  for(let i = 0; i< array.length; i++){
    console.log(array[i]);
  }
}
console.log('ESERCIZIO 1');
arrayElements(pets);


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function arrayElementsSorted (array) {
  return array.sort();
}

console.log('ESERCIZIO 2');
console.log(arrayElementsSorted(pets));

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function arrayElementsReversed (array){
  return array.reverse();
}

console.log('ESERCIZIO 3');
console.log(arrayElementsReversed(pets));

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

function moveElement(array){
  array.push(array[0]);
  array.splice(0,1);
  return array;
}
  console.log('ESERCIZIO 4');
  console.log(moveElement(pets));

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
function randomNumber(){
  return Math.floor(Math.random() * 10);
}
function randomLetter(){
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
}


function addLicensePlate (object) {

  
  for(let i = 0; i< object.length; i++){
    object[i].licensePlate = ''+randomNumber() + randomNumber() + randomNumber() + randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber();
  }
  return object
}
console.log('ESERCIZIO 5');
console.log(addLicensePlate(cars));

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


function addObjectAndTrim (object) {
  const myCar = {...cars[0]};
  myCar.brand = 'Toyota';
  myCar.model = 'Corolla';
  myCar.color = 'blue';
  myCar.trims = ['LE', 'XSE', 'SE'];    
    object.push(myCar);
    for(let i =0; i < object.length ; i++){
      object[i].trims.pop();
    }
    return object;
}

console.log('ESERCIZIO 6');
console.log(addObjectAndTrim(cars));



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

function getTrims(array){
  for (let i = 0; i < array.length; i++){
    justTrims.push(array[i].trims[0]);
  }
  return array;
}
getTrims(cars);

console.log('ESERCIZIO 7');
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function getFirstLetter (array) {
  for(let i=0; i< array.length; i++){
    if(array[i].color[0] === 'b'){
      console.log('Fizz');
    }else{
      console.log('Buzz');
    }
  }
}
console.log('ESERCIZIO 8');
getFirstLetter(cars);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

function printNumbers (array){
  let i=0;
  while(numericArray[i] !== 32){
    console.log(numericArray[i]);
    i++;
  }
}
console.log('ESERCIZIO 9');
printNumbers(numericArray);


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];
const positionArray = [];
function checkAlphabetPosition (array) {
  for (let i=0; i< array.length; i++){
    switch(array[i]){
      case 'g':
      positionArray.push(alphabet.indexOf('g') + 1);    
      break;
      case 'n':
      positionArray.push(alphabet.indexOf('n') + 1);    
      break;
      case 'u':
      positionArray.push(alphabet.indexOf('u') + 1);    
      break;
      case 'z':
      positionArray.push(alphabet.indexOf('z') + 1);    
      break;
      case 'd':
      positionArray.push(alphabet.indexOf('d') + 1);    
      break;
    }
  }
}

console.log('ESERCIZIO 10');
checkAlphabetPosition(charactersArray);
console.log(positionArray);