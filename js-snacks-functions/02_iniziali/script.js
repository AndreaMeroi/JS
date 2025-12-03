/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names);



// Dichiara la funzione qui.

const primeLettereArrayCreator = () => {


    // creo una variabie con un array vuoto per salvare il novo array 

    const primeLettereNames = []

    // ciclo nell'array per selezionare ogni singola parola 

    for (let i = 0; i < names.length - 1; i++) {
        const parola = names[i]
        console.log(parola);

        // utilizzo l'indice per selezionare la prima lettera di ogni singola parola 
        const primaLetteraParola = parola[0]
        console.log(primaLetteraParola);

        // creo un nuovo array inserendo ogni prima lettera nel nuovo array utilizzando il metodo push 

        primeLettereNames.push(primaLetteraParola)
    };

    // uso return perchè il dodice è di più righe in modo da restituire il risultato fuori dalla funzione 

    return primeLettereNames

}

// Invoca la funzione qui e stampa il risultato in console

const newArray = primeLettereArrayCreator(names)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(newArray);
