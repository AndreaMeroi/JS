// function declarations without params

logMessage() // this is a message

function logMessage() {
    console.log('This is a message');

}

logMessage() // this is a message

// function with Return

function getMessage() {

    return 'this is a message'
}

// function WITH params

function sum(numb_1, numb_2) {
    return numb_1 + numb_2
}

// Function Expression 

const multiply = function (numb_1, numb_2) {
    return numb_1 * numb_2

}
multiply(10, 2) // result 20 

/* ARROW FUNCTION:

- () => {}

    NOTE:
- {}: le graffe sono opzionali se il codice è su una riga sola
- {}: senza le graffe il return diventa implicito (non serve metterlo)
- {}: le tonde sono OBBLIGATORIE se ci sono zero o più di un parametro
- {}: le tonde sono OPZIONALI se la funzione accetta un singolo parametro 

*/

// Arrow Function(using curly brachets the RETURN IS COMPULSORY)

const arrowMultiply = (numb_1, numb_2) => {
    return numb_1 * numb_2

}
arrowMultiply(10, 20) // result 20 

// Arrow Function(WITHOUT using curly brachets with inline code the RETURN IS IMPLICIT)

const showMultiply = (numb_1, numb_2) => numb_1 * numb_2

showMultiply(10, 20) // result 20 

/* ESERCIZIO => CONVERTO FUNZIONI IN ARROW FUNCTION  */

//from function 
/*

function esercizioSum(numb_1, numb_2) {
    return numb_1 + numb_2
}
    */

//TO Arrow function WITH curly brachets and RETURN
/*
const esercizioSum = (numb_1, numb_2) => {
    returnnumb_1, numb_2
}
    */

//TO Arrow function WITHOUT curly brachets and IMPLICIT RETURN

const esercizioSum = (numb_1, numb_2) => numb_1 + numb_2;



//from function 
/*
function isEven(numb) {
    if (numb % 2 === 0) {
        return true;


    } else {
        return false;
    }
}
*/

//TO Arrow function WITH curly brachets and RETURN
/*
const isEven = (numb) => {
    if (numb % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
    */
//TO Arrow function WITHOUT round brachets and curly brachets and IMPLICIT RETURN

const isEven = numb => numb % 2 === 0

if (isEven(10)) {
    console.log('numero Pari');
} else {
    console.log('numero dispari');

}