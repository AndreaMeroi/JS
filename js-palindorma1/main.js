/*




Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
 */

/* ESERCIZIO 1 > Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */




// Chiedere all’utente di inserire una parola

const typedWord = 'Marco'

// creo la funzione per stampare la paroa al contrario
function reverse_Word(word) {
    let reversed = ''

    for (let i = word.length - 1; i >= 0; i--) {

        // con l'operatore += inserisco le singole lettere una dopo l'altra per creare una singola stringa 

        reversed += word[i]

    }

    console.log(reversed)
    return reversed
}
// creo la funzione per confrontare la versione inserita dall'utente con la versione al contrario per definires e le due parole sono uguali 

function isPalindrom(word) {

    const reversedWord = reverse_Word(word)
    console.log(reversedWord);


    if (reversedWord === word) {

        return true

    }
    // in questo caso non serve l'ELSE per indicare il FALSE lo fa automaticamente

}

// UTILIZZO 2 FUNZIONI perchè è meglio in ottica di riutilizzo creare funzioni che facciano una singola azione 

// invocare la funzione per stampare il risultato 

if (isPalindrom(typedWord)) {
    console.log(`the word ${typedWord} is palindrom`);
    document.writeln(`the word ${typedWord} is palindrom`);

} else {
    console.log(`the word ${typedWord} is NOT palindrom`);
    document.writeln(`the word ${typedWord} is NOT palindrom`);
}


/* ESERCIZIO 2 > Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 (utilizzo una variabile)
let userChoice = 'pari'
console.log(userChoice);

const userNumber = 4
console.log(userNumber);


//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

let randomNumber = (Math.floor(Math.random() * 5) + 1)
console.log(randomNumber);


//Sommiamo i due numeri

const total = userNumber + randomNumber
console.log(total);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven(numb) {
    if (numb % 2 === 0) {
        return 'pari';


    } else {
        return 'dipari';
    }
}

// verificare se il risultato della somma è unguale alla scelta dello user 

if (isEven(total) === userChoice) {

    // se i il numero è pari e l'itente sceglie pari, l'utente vince
    console.log('you win');

    // altrimenti perde
} else {
    console.log('you loose');

}


// Dichiariamo chi ha vinto.



