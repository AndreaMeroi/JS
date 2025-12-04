/*
SELEZIONARE I NODI DELLA DOM CON L'ID
*/
const userEl = document.getElementById("user")

// read the dom node
console.log(userEl);

// read the properties using DOT NOTATION
console.log(userEl.id);

console.log(userEl.innerHTML);

console.log(userEl.outerHTML);

// the NODE is on Object //
console.log(typeof userEl);

/*
SELEZIONARE I NODI DELLA DOM using querySelector 
(seleziona SOLO il primo elemento con quella classe disponibile nel codice)
*/
// uso il punto come in CSS per selezionare le classi 

const cardEl = document.querySelector(".card")

console.log(cardEl);

// per selezionare TUTTI I NODI con querySelector (restituisce un array di nodi)

const allCardEl = document.querySelectorAll('.card')
console.log(allCardEl);

/* 
NODE METHODS strumendi che permettono di modificare e interagirte con la DOM
 */

// read: const userEl = document.getElementById("user")

const userText = userEl.innerHTML
console.log(userText);

// write (cambiare il contenuto di innerHtml -> era Andrea ora è Ciao, è scomparso anche l'H1 )
userEl.innerHTML = 'ciao' //vedi in pagina (browser)
console.log(userEl);

// write (cambiare il contenuto di innerHtml -> era Andrea ora è Ciao Andrea in h2, è scomparso anche l'H1 )
userEl.innerHTML = '<h2>Ciao Andrea</h2>' //vedi in pagina (browser)
console.log(userEl);

/*
className
*/

//select the dom node

const containerEl = document.querySelector('.container')
console.log(containerEl);

//read
console.log(containerEl.className);

//write (cambia tutte le classi pre-esistenti sostituendole con la nuova)

// containerEl.className = 'row'
//console.log(containerEl);

//write (mantengo tutte le classi pre-esistenti (+=) aggiungendo  la nuova)
containerEl.className += ' row'
// laversione estesa sarebbe: containerEl.className = className + ' row'
console.log(containerEl);

/*
classList
*/
console.log(containerEl.classList);

//selezionare solo una delle classi
console.log(containerEl.classList[3]);

//get the length
console.log((containerEl.classList.length));

// add a new class to the list 
containerEl.classList.add('text-blue')
console.log(containerEl.classList);

// remove a class from the list 
containerEl.classList.remove('container')
console.log(containerEl.classList);

/* Style */

const redBlockEl = document.getElementById('redBlock')
//read
console.log(redBlockEl.style);

console.log(redBlockEl.style.backgroundColor);

//write
//manipolo il colore di fondo (da rosso a verde)
redBlockEl.style.backgroundColor = 'green'


/*EXERCISE*/

// SELECT THE IMAGE
const imgEl = document.querySelector('img')
console.log(imgEl.alt); //null
console.log(imgEl.src);

// sostituisco l'immagine (seleziono)
imgEl.src = 'https://magazine.arcaplanet.it/wp-content/uploads/2023/02/razza-lagotto-romagnolo.jpg'
console.log(imgEl.src);


