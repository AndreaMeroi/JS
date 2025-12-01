/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
 */
//ESERCIZIO 1

// Chiedere all’utente di inserire una parola

const typedWord = 'ANNA'

// stampare la paroa al contrario

function isPalindrom(word) {

    let reversed = ''


    for (let i = word.length - 1; i >= 0; i--) {

        // con l'operatore += inserisco le singole lettere una dopo l'altra per creare una singola stringa 

        reversed += word[i]

    }

    console.log(reversed)

    // confrontare la versione inserita dall'utente con la versione al contrario per definires e le due parole sono uguali 

    if (reversed === word) {

        return `La parola ${word} è palindroma`

    } else {

        return `La parola ${word} NON è palindroma`

    }

}

// invocare la funzione per stampare il risultato 

const result = isPalindrom(typedWord)
console.log(result);




