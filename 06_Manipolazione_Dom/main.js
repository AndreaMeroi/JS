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

//il software chiede all'utente il suo nome 

const userName = 'Andrea' //dovrei usare promt
//il software chiede all'utente il suo colore preferito
const favColor = 'green' //Dovrei usare prompt

// il software stampa in pagina ilnome dell'utente del colore specificato 


//seleziono il nodo della dom DOVE inserire il nome utente
const userOutputE1 = document.querySelector('#userOutput') //uso il cancelletto perchè seleziono l'ID, come in CSS)
//uso innerHTML per inserire ilnome dell'utente 
userOutputE1.innerHTML = userName
// uso ELEMENT.STYLE.COLO per colorare il testo
userOutputE1.style.color = favColor // in caso di prompt > favColor.toLowerCase()

// qui quello che seccude nel codice
console.log(userOutputE1);


/*IMPORTANTE: EVENT LISTENER */

const buttonEl = document.querySelector('button') //non uso ne '.' ne '#' perchè prendo direttamente il tag)
// attivo l'eventListener sul click

//con la funzione anonima
buttonEl.addEventListener('click', function () {
    console.log('hai cliccato');

})


//con l'arrow function
buttonEl.addEventListener('click', () => {

    console.log('Hai cliccato arrow function');

})

//con il function handler(il nome della funzione)> Utilizzabile SOLO se la funzione non prevede parametri

function handleClick() {
    console.log('Hai cliccato usando una funzione gia esistente nel codice, perciò riutilizzabile');

}
buttonEl.addEventListener('click', handleClick)

/*ESERCIZIO */

//Al click di un pulsante cambiare il colore dell'h1 sottostante

//selezionare il Bottone e l'H1

const changeColorE1 = document.getElementById('colorChanger')
const messageE1 = document.getElementById('message')

//add event listener

changeColorE1.addEventListener('click', function () {
    //change text color
    messageE1.style.color = 'green'
})

