console.log('Object');

//oggetto vuoto 
const ball = {

}

console.log(ball);

// oggetto (tipi di dato che può contenere)

const mouse = {
    color: ['black', 'gray'], //array
    type: 'vertical', //stringa
    wireless: true, //valore booleano true/false
    price: 45, //numero
    led: {
        size: 'small',
        color: 'red'
    }, // può contenere altri oggetti
    printDetails() {
        console.log('Print the mouse details');
        /* la parola chiave ''this'' fa riferimnto a tutto il contenutp dell'oggetto
        in cui si trova e con la dot notation ed interpolando this.la chiave posso far stampare dalla
        funzione una pfrase integrando i dati in maniera flessibile*/
        console.log(`mouse: ${this.type} - price: ${this.price}`);

    } // può contenere funzioni 
}

//posso accedere alla funzione contenuta nell'oggetto tramite la dot notation
mouse.printDetails() // in questo caso stampo in console usando la dot notation 

console.log(mouse);

/* accedere alle proprietà di un oggetto*/

// Dot Notation 
console.log(mouse.wireless);

//Square brackets notation (facendo attenzione di usare le "" tra le quadre)

console.log(mouse['led']);

// la square brackets notation è SEMPRE da utilizzare quando la chiave è dinamica

/* COMMENTATO PERCHè IL PROMPT BLOCCA TUTTO CIO' CHE SEGUE 
const userAnswer = prompt('type a keyname')
console.log(mouse[userAnswer]);


// con la dot notation userAnswer non esisterebbe 
mouse.userAnswer // non esiste userAnswer nel oggetto 
*/

/* CICLO FOR.. IN (creazione di una variabile che prende il suo contenuto
 da una variabile esterna precedentemente creata, che sarebbe l'oggetto nel quale ciclare)
- Cerca una chiave dentro un oggetto -
 */
const palla = {
    prezzo: 12,
    tipo: 'pallina da golf'
}

for (let key in palla) {
    console.log(key); // mi rende solo le chiavi
    console.log(palla[key]); // mi rende i valori corrispondenti alle chiavi
}

// aggiungere una proprietà ad un oggetto (nome oggetto .nomeNuovaChiave = nuovo/i valore/i)

palla.circonferenza = [13, 24, 46, 57, 80]

console.log(palla);

// Array di oggetti (complex data types)

const posts = [
    {
        id: 1,
        title: 'learn php',
        content: 'lorem ipsum dolor',
        author: 'andrea'
    },
    {
        id: 2,
        title: 'learn js',
        content: 'lorem ipsum dolor',
        author: 'andrea'
    },
    {
        id: 3,
        title: 'learn laravel',
        content: 'lorem ipsum dolor',
        author: 'andrea'
    },
    {
        id: 4,
        title: 'learn react',
        content: 'lorem ipsum dolor',
        author: 'andrea'
    }
]

for (let key in posts) {
    console.log(posts[key]);
}

//Stampo in pagina una card per ciascun post da js VEDI FILE HTML 

const rowEL = document.querySelector('.row')
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    console.log(post);

    const postMarkUp = `
    <div class="row">
                <div class="col">
                    <div class="card">
                     ${post.title}
                    </div>
                </div>
            </div>
            `
    rowEL.insertAdjacentHTML('beforeend', postMarkUp)


}


/*ESERCIZIO: 
CREARE UN ARRAY CHE RAPPRESENTA UNA ZUCCHINA, 
INDICANDO PER OGNUNA VARIETà, PESO E LUNGHEZZA. 
CALCOLA QUANTO PESANO TUTTE LE ZUCCHINE */

const zucchine = [
    {
        id: 1,
        varietà: 'tonda',
        peso: 12,
        lunghezza: 15
    },
    {
        id: 2,
        varietà: 'viola',
        peso: 15,
        lunghezza: 19
    },
    {
        id: 3,
        varietà: 'bianca',
        peso: 11,
        lunghezza: 20
    },
    {
        id: 4,
        varietà: 'siciliana',
        peso: 22,
        lunghezza: 40
    },
    {
        id: 5,
        varietà: 'riccia',
        peso: 29,
        lunghezza: 35
    },
    {
        id: 6,
        varietà: 'rossa',
        peso: 14,
        lunghezza: 21
    },
    {
        id: 7,
        varietà: 'nana',
        peso: 3,
        lunghezza: 5
    },
    {
        id: 8,
        varietà: 'tonda',
        peso: 12,
        lunghezza: 15
    },
    {
        id: 9,
        varietà: 'giante',
        peso: 65,
        lunghezza: 60
    },
    {
        id: 10,
        varietà: 'comune',
        peso: 16,
        lunghezza: 15
    },
]

let pesoTot = 0

for (let i = 0; i < zucchine.length; i++) {

    /* accedi alla proprietà peso di ognisingola zucchina con .peso
    somma il risultato di ogni iterazione alla precedente con += 
    */

    pesoTot += zucchine[i].peso

}

console.log(pesoTot);
