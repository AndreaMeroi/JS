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

    const thisMovie = movies[i]
    console.log(thisMovie);

}

/* movies.length = 3

i = 0 ; 0 < 4 -> movies[0] - matrix -> i++ (i = 1)
i = 0 ; 1 < 4 -> movies[1] - il signore degli anelli -> i++ (i = 2)
i = 0 ; 2 < 4 -> movies[2] - starwars -> i++ (i =3 )
i = 0 ; 3 < 3 -> false 

*/

const nomi = ['marco', 'luca', 'paolo']

for (let i = 0; i < nomi.length; i++) {

    console.log(nomi[i]);

}

