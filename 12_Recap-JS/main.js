/*

Data types: 
- string
- numbers
- array
- objects
- undefined
- null

Control flow tools:
- for 
- if

Function

DOM manipulation 

AJAX



*/

// DATA TYPES

/*const fruit = "apple"
console.log(fruit);*/

const numb = 4
const stringnumb = "4"

// Array
const fruits = ["apple 1", "apple 2", "apple 3"]
// per accedere all'elemento 'apple 1' 
console.log(fruits[0]);


// objects 
const fruit = {
    name: "apple",
    color: "red"
}

// CONTROL FLOW TOOL: if/else + for loop 

for (let i = 0; i < fruits.length; i++) {
    // take the arrayi item
    const item = fruits[i]
    console.log(item);
}

// if/else
console.log(fruits.length > 0);

if (fruits.length > 0) {
    console.log('the basket is full of fruit');
} else {
    console.log('the basket is empty');

}

// FUNCTIONS
//> function declaration (hoisted) - può essere richiamata anche prima di essere dichiarata

greet('Andrea')
// call the function (only functions declarations)
function greet(name) {
    console.log(`Hi ${name}`);
}
greet("Fabio")
// call the function  (only functions declarations)

//> function expression (Not Hoisted) - NON può essere richiamata prima di essere dichiarata
// è funzione anonima salvata salvata in una variabile (let o const e nessuna delle due è soggetta ad hoisting)

const greet_1 = function (name) {
    console.log(`Hi ${name}`);
}

const greet_arrow = (name) => {
    console.log(`Hi ${name}`);
}

// call the function AFTER declaration
greet_1('Mario')
greet_arrow('Silvio')

// DOM MANIPULATION 

// > select dom elements:
// - document.getElementById
const headingEl = document.getElementById('heading')
// - document.querySelector
// const textEl = document.querySelector('p') > seleziona IL PRIMO p che trova
// const textEl = document.querySelector('p.text')> seleziona il p che CONTIENE la classe text 
const textEl = document.querySelector('.text')  // > seleziona tutti tag con la classe text
// - document.getElementsByClassName
// - document.querySelectorAll


// > modify dom elemnts

headingEl.innerText = 'Ciao ciao'
headingEl.style.color = 'red'
headingEl.classList.add('bg-red')

// > create/remove elements 
// creo un elemento nella dom all'interno del tag con id=heading(in questo caso un h1)
const headingOneEl = document.createElement('h1')
// assegno una classe all'elemento creato
headingOneEl.classList.add('title')
// inserisco del testo nell'elemento creato 
headingOneEl.textContent = 'Welcome into the tag with id heading'

// con Append Child (inserisco il contenuto appena creato nel tag che contiene id=heading)
headingEl.appendChild(headingOneEl)

// EVENT LISTENERS

/*
creazione dinamica delpulsante (solo un esempio in questo caso)
const buttonElement = document.createElement('Button')
buttonElement.textContent = 'Click Me'

buttonElement - addEventListener('click', () => {
    console.log('Cliked');
})

*/

const actionBtnEl = document.getElementById('action')
actionBtnEl.addEventListener('click', () => {
    console.log('cliked!');
})

// AJAX CALLS (o anche HTTP calls) - IMPORTANTE

/*
fetch("https://swapi.info/api/films")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .then((error) => console.error(error))
 */
// SALVO IN UNA VARIABILE IL LINK DEL SERVE AL QUALE EFFETTUARE LA CHIAMATA
const api_url = 'https://swapi.info/api/films'
// SELEZIONO UN ELEMENTO DELLA DOM DA MANIPOLARE
const moviesListElement = document.getElementById('movies')
const planetsListElement = document.getElementById('planets')

fetch(api_url)
    .then(res => res.json())
    .then(movies => {
        // console.log(movies); // movies contains array di objs

        /* seleziono tutti gli oggetti contenuti in movies CON FOR 
        
        for (let i = 0; i < movies.length; i++) {
            const thisMovie = movies[i];
            console.log(thisMovie.["title"]); - //con le squre brachets seleziono solo l'elemento 'title' nell'oggetto
            console.log(thisMovie.title); -con la dot notation seleziono solo l'elemento 'title' nell'oggetto
        }*/
        /*s eleziono tutti gli oggetti contenuti in movies CON FOR EACH*/
        movies.forEach(movie => {
            //console.log(movie["title"]); //con le squre brachets seleziono solo l'elemento 'title' nell'oggetto
            // console.log(movie.title)// con la dot notation seleziono solo l'elemento 'title' nell'oggetto

            // create a Li dom element
            const litl = document.createElement('li')
            // add the title inside
            litl.innerText = movie.title
            console.log(litl);
            // append to the list element
            moviesListElement.appendChild(litl)

            /* verify if the array planets > 0 
         if so log it to the console */
            console.log(movie.planets); // contiene un'array 

            if (movie.planets.length > 0) {
                console.log('get the plantes for this movie');

                movie.planets.forEach(planet => {
                    console.log(planet);

                    fetch(planet)
                        .then(res => res.json())
                        .then(planet_data => {
                            console.log(planet_data.name);
                        })
                })




                /*const liCa = document.createElement('li')
                liCa.innerText = movies.planets
                console.log(liCa); */

                // CHECK IF VEHICLES
                if (movie.starships.length > 0) {
                    movie.starships.forEach
                }

                // CHECK IF SPECIES


            }
        })
    })
    .catch(err => {
        console.error(err.message);
    })