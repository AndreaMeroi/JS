console.log('Recap Boolean');

// Data types (Objects, Array etc..)
// array, obj, strings, nymbers

let name = "Hi there"
let forthLetter = name[4]; //salva in una variabile la seconda 'h' in name 
console.log(forthLetter);
// stampa tutte le lettere di name
// ciclo for > variabile(counter); condition; increment/decrement

for (let i = 0; i < name.length; i++) {
    const character = name[i];
    console.log(character);
}

// array (sequenza di elementi)

const movies = [
    'The matrix', // 0
    'inception', // 1
    'Interstellar',
    'the dark night',
    'pulp fiction',
    'the shawshank redemption'
]

const inception = movies[1]
console.log(inception);

//per recuperare l'ultimo elemento dell'array SENZA saperne la lunghezza
const lastElement = movies[movies.length - 1]
console.log(lastElement);


// FOR + DOM (APPEND A LIST ITEM FOR EACH MOVIE IN THE ARRAY)

// uso LET perchè il valore della variabile deve poter cambiare 
let ulElement = document.getElementById("movieslist")

for (let i = 0; i < movies.length; i++) {
    const thisMovie = movies[i]
    // stampare tutti gli elementi di un array con FOR 
    console.log(thisMovie);

    // usando DOM API 
    const liEl = document.createElement('li')
    liEl.innerHTML = thisMovie
    // update the dom every iteration (or only once)
    ulElement.appendChild(liEl)
    /* 
        // usando TEMPLATE LITERAL
        const liString = `<li>${thisMovie}</li>`

        // update the dom every iteration (or only once)
        ulElement.innerHTML += liString
        
    */
}

// stampare tutti gli elementi di un array con FOREACH

movies.forEach((movie) => {
    console.log(movie);
})

// Array methods (foreach, map, filter, find etc..)

const moviesList = [
    {
        title: "The matrix",
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski"
    },
    {
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan"
    },
    {
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan"
    },
    {
        title: "The dark night",
        year: 2008,
        director: "Christopher Nolan"
    },
    {
        title: "Pulp fiction",
        year: 1994,
        director: "Quentin Tarantino"
    },
    {
        title: "The shawshank redemption",
        year: 1994,
        director: "Frank Darabont"
    }
]

// seleziono Interstellar
const interstellarMovie = moviesList[2]
console.log(interstellarMovie);

// seleziono SOLO il titolo Interstellar
const interstellarMovieTitle = moviesList[2].title // oppure moviesList[2]["title"]
console.log(interstellarMovieTitle);

// loop over the array of objs (FOR)

for (let i = 0; i < moviesList.length; i++) {
    const thisMovie = moviesList[i]
    console.log(thisMovie);

    // voglio stampare SOLO il director dei film 
    console.log(thisMovie.director); // oppure  console.log(thisMovie["director"]);
    /* 
        // è anche possibiile creare una CHIAVE DINAMICA
        const key = "director"
        console.log(thisMovie[key]);
    */
}

// loop over the array of objs (FOREACH)

moviesList.forEach((movie) => {
    console.log(movie.title);
})

// functions

// utilizza FOR per CREARE un nuovo ARRAY 

const newArray = []

for (let i = 0; i < moviesList.length; i++) {
    const movie = moviesList[i];// con FOR SERVE la Variabile d'appoggio

    if (movie.year >= 2010) {
        newArray.push(movie)
    }
}
console.log(newArray);

// utilizza FOREACH per CREARE un nuovo ARRAY 

const newArr = []
moviesList.forEach((movie) => {
    if (movie.year >= 2010) {
        newArr.push(movie)
    }

})
console.log(newArr);


// Event listeners (forms)

const buttonEl = document.querySelector('button')
buttonEl.addEventListener('click', () => {
    console.log('you cliked me!');
})

// Ajax / Postman
axios.get('https://swapi.info/api/films')
    .then(response => {
        console.log(response.data);
    })

