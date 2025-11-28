// function declaration

/*
-keyword: functiom
-function name: myFunctionName
parentesis: (params)
-code block; {//your code}

function greetings() {
// your code goes here
}

 */

// Function declaration without parameters

// global scope 

function logGreetings() {

    // function scope (local scope)
    console.log('hi there!');

}

console.log(logGreetings);


// Function declaration with parameters
// this function wants a params called userName

function logGreet(username) {
    console.log(`Hi ${username}`);

}

logGreet('luca')

function printGreet(username) {
    document.writeln(`Hi ${username}`);

}

printGreet('luca')

// Function declaration with return

function sumNumbers(numb_one, numb_two) {
    const result = numb_one + numb_two

    return result
}

const total = sumNumbers(20, 40)

console.log(total);

// PARAMETRI != ARGOMENTI

function somma(num_1, num_2) {
    // è possibile anche eseguire direttamente il RETURN

    return num_1 + num_2

}

const prezzoPanino = 7
const prezzoBibita = 3

const tot = somma(prezzoPanino, prezzoBibita)
console.log(tot);


/* 
ESERCIZIO pari o dispari:

scrivere una funzione per verificare se un numero è pari o dispari,
quindi chiede un numero all'utente
e comunicargli se è pari o dispari

//function name:

//params: 
- numb

//tools:
-if
-prompt

*/

// scrivere una funzione per verificare se un numero è pari o dispari

const isEven = 10 // SAREBBE DA UTILIZZARE: prompt('type your number')

function evenOrOdd(numb) {
    //verificare se un numero è pari o dispari

    let isEven = ''

    if (isEven % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }

    return isEven

}

const even = evenOrOdd(isEven)

//comunicare se è pari o dispari

if (even === true) {
    console.log(`the number ${isEven} is even`
    )
} else {
    console.log(`the number ${isEven} is even`);

}

//ESERCIZIO reverse word (leggere una parola al contrario)

const firstName = 'mariangela'

function reverse(word) {

    let reverseWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
        const thisCarachter = word[i]
        reverseWord = reverseWord + thisCarachter //non mi è chiaro

    }
    return reverseWord

}

const functionResult = reverse(firstName)
console.log(functionResult);

