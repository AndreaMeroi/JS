/* Scrivi una funzione che accetti un'array di stringhe e una 
lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names);

const letteraIniziale = 'A'

// Dichiara la funzione qui.


const filterPerLetter = (array, letter) => {

    const filteredletter = array.filter(word => word.toLowerCase().startsWith(letteraIniziale.toLowerCase()))
    console.log(filteredletter);
    return filteredletter

}


// Invoca la funzione qui e stampa il risultato in console

const wordsWithA = filterPerLetter(names, letteraIniziale)
console.log(wordsWithA);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]