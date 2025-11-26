// 3 modi per interagire con l'HTML

// 1> alert('Hello World') [utilizzando la funzione ''alert'']

// 2> document.writeln('Hello World') [utilizzando writeln]

// 3> document.getElementById('title').innerHTML = 'hello word' [selezionando un elemento dell'html, in questo caso un ID]

// data types (javaScript manipola dei valori ed ogni valore appartiene ad un TIPO):
// - strings: 'ciao'
// - numbers: 5
// - Booleans: true|false 1|0 
// - object - oggetto
// - function - funzione 
// - undefined 
// - null 

// console log


console.log("ciao");
console.log(5);

// read the data types using typeof

console.log(typeof 'ciao');
console.log(typeof 5);

// variabili (contenitore in cui salvare informazioni, dati)

const first_name = 'andrea'
const firstName = 'marco'

// read variable using console log 

console.log(first_name);

// Declaration a variable 
// Only declaration 

let last_name
console.log(last_name); // results as 'undefined'


// declaration and iniitialization 

let lastName = 'Meroi'
console.log(lastName) // results as 'Meroi'

// late initializaion 
last_name = 'Rossi'
console.log(last_name) // results a s 'Rossi' 

// MANIPOLARE LE STRINGHE 

// L'operatore DI CONCATENAZIONE (+) UNISCE 2 O PIù STRINGHE 

const full_name = 'Andrea ' + 'Meroi'
console.log(full_name);

// TEMPLATE LITERAL -> UTILIZZA I BACKTICK PER CONCATENARE STRINGHE DI PIU' RIGHE E INTERPOLARE ${variabile} le variabili all'interno di una stringa

console.log(`
    ciao 
    ciao 
    ciao
    ${full_name}
    ciao `
);

// MANIPOLARE I NUMERI 

const sum = 2 + 5
console.log(sum);

const result = sum / 2
console.log(result);

const multiply = sum * 4
console.log(multiply);

const subtraction = multiply - result
console.log(subtraction);

// access to properties and methods of objects using dot notation

console.log(30.78787877.toFixed(3)); // method

console.log(full_name.length); //property

console.log(full_name.split('')); // method


