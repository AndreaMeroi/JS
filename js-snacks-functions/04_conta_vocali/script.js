/* Scrivi una funzione che accetti una stringa e restituisca il 
numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocali = (string) => {

    // creo una variabile d'appoggio per salvare le vocali identificate

    const foundVowels = []

    // ciclare nella stringa per analizzare tutti gli elementi 
    for (let i = 0; i < string.length - 1; i++) {

        let newString = []

        // if per identificare se le lettere sono ungualiad A OR E OR I OR U OR O

        if (string[i] === 'a' ||
            string[i] === 'e' ||
            string[i] === 'i' ||
            string[i] === 'o' ||
            string[i] === 'u') {

            //stampare solo le vocali e pusharle nella nuova stringa

            foundVowels.push(string[i])

        }

    }

    return `${foundVowels.length} (${foundVowels.join(', ')})`;
}

// Invoca la funzione qui e stampa il risultato in console

const result = vocali(word)
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)