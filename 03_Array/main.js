console.log('Array');

// array

const numb = 12
const name = 'andrea'
const is_working = true

const movie_1 = 'matrix'
const movie_2 = 'il signore degli anelli'
const movie_3 = 'starwars'


const movies = ['matrix', 'il signore degli anelli', 'starwars']
console.log(movies);

// posso accedere alle informazioni dell'array come faccio con gli oggetti (usando la dot notation)
console.log(movies.length);

// accedere agli elementi invocando il nome dell'array ed utilizzando le parentesi quadre insieme alla posizione sfruttando l'indice
// read array's elements

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);

//ARRAY METHODS (usando la dot notation)

// aggiungere uno o più elementi alla FINE di un array > PUSH 
movies.push('lucifer')
console.log(movies);

// aggiungere uno o più elementi all'INIZIO di un array > UNSHIFT 
movies.unshift('die hard')
console.log(movies);

// eliminare elementi dalla FINE di un array > POP
movies.pop()
console.log(movies);

// eliminare elementi dall'INIZIO di un array > SHIFT

movies.shift()
console.log(movies);

//ARRAY + CICLI

for (let i = 0; i < movies.length; i++) {

    // con la parentesi quadra indico l'elemento dell'array da loggare [i]
    console.log(movies[i]);

}


// in alternativa posso anche utilizzare una variabile d'appoggio 
console.log('CON VARIABILE D APPOGGIO')


for (let i = 0; i < movies.length; i++) {

    //variabile d'appoggio
    const thisMovies = movies[i]
    console.log(thisMovies);


}


/* movies.length = 3

i = 0 ; 0 < 4 -> movies[0] - matrix -> i++ (i = 1)
i = 0 ; 1 < 4 -> movies[1] - il signore degli anelli -> i++ (i = 2)
i = 0 ; 2 < 4 -> movies[2] - starwars -> i++ (i =3 )
i = 0 ; 3 < 3 -> false 

*/


// ESEMPI
//nomi

const nomi = ['marco', 'luca', 'paolo']

for (let i = 0; i < nomi.length; i++) {

    console.log(nomi[i]);

}

//numbers 



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {

    const thisNumbers = numbers[i]

    // salvando il risultato del ciclo FOR in una variabile d'appoggio posso lavorare meglio il dato 
    // esempio: cerco di individuaare quando il numero è pari 

    if (thisNumbers % 2 === 0) {

        console.log(`the number ${thisNumbers} is even`);

    }
    else {

        console.log(`the number ${thisNumbers} is odd`)

    }
}

// Snacks 

const cities = ['London', 'Shanghai', 'new york', 'delhi', 'kuala lumpur']
const names = []
const numeri = [1, 2, 3]
const colours = ['red', 'blue', 'yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['bolivia', 'jordan', 'greenland']
const fruits = ['apple', 'orange', 'pear']

//aggiungi Fred all'array names
names.push('Fred')
console.log(names);

//aggiungi 4 alla fine dell'array numbers
numeri.push(4)
console.log(numeri);

//aggiungi rio all'inizio dell'array cities
cities.unshift('rio')
console.log(cities);

//stampa in console tutte le città 

for (let i = 0; i < cities.length; i++) {

    const thisCity = cities[i]
    console.log(thisCity);

}

//trovare la posizione di jordan nell'array 

console.log(countries.indexOf('jordan'));
const jordanIndex = countries.indexOf('jordan')

//rimuover l'elemento jordan dall'arrray

countries.splice(jordanIndex, 1)
console.log(countries);

//ciclare al contrario nell'array colours 

for (let i = colours.length; i >= 0; i--) {

    console.log(colours[i]);

}


