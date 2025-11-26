console.log('pari e dispari');


/*
pari o disperi:
-chiedere all'utente se vuole pari o dispari
- e un numero compreso tra 0 e 9
generare un numero casuale compreso tra 1 e 9, che sarà la giocatat del computer
- stabilire chi ha vinto secondo le rgole di pari e dispari

Tools:

- salvare la richiesta dell'utente CONST/LET
- PROMPT per fare inserire la giocata dell'utente
- math.random/math.floor per generare la giocata del computer
- modulus operator per identificare se un numero è pari o dispari
- if else

*/

// ask user to chose pari o dispari and save the result into a variable 

const userChoice = prompt('scegli pari o dispari ').toLowerCase()

console.log(userChoice);


// ask use to choose a number between 1 and 9 and save the result 

const userNumber = Number(prompt('scegli un numero tra 1 e 9'))

console.log(userNumber);


// generate a random number using math 

const pcNumber = Math.floor(Math.random() * 9) + 1

console.log(pcNumber);


//#elaboration 

//sum numbers 
const sum = userNumber + pcNumber

console.log(sum);


// if the number is even in variable 
// otherwise store odd
console.log(sum % 2);
console.log(sum % 2 === 0);

let result = ''

if (sum % 2 === 0) {
    result = 'pari'
} else {
    result = 'dispari'
}

console.log(result);

let winner = ''

if (userChoice === result) {
    winner = 'You Win'
} else {
    winner = 'Pc Wins'
}

// output 
// declare winner

console.log(winner);


