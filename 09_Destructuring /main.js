console.log('Destructuring')


const person = {

    name: 'paolo',
    age: 30,
    email: 'paolo@email.com'
}

//create a new varaible in ES5 
/*
const name = student.name
console.log(name);

const email = student.email
console.log(email);
*/

//DESTRUCTURING OBJECTS
// create a new variable in ES6 using destructuring using key between curly brachets named the same as the object properties
/*non importa l'ordine in cui scrivo le chiavi tra le graffe, perchè nell'OGGETTO
utilizzo il nome delle chiavi per recuperare il dato */

const { name, email } = person

console.log(name);
console.log(email);

//DESTRUCTURING ARRAYS
/*l'ordine in questo caso è importante perchè nell'ARRAY la posizione (l'indice) è
l'unico modo per identificare a quale dato mi sto riferendo. In questo caso per destrutturare 
utilizzo un campo vuoto tra le virgole per indicare di creare solo le variabili nome_1 e nome_3 */

const names = ['marco', 'giorgio', 'luigi', 'federico', 'elisa']

/*empty commas to skip a position (in questo caso le chiavi 
non devono avere lo stesso nome delle proprietà,
 ma i dati vengono presi in funzione della posizione; es name_1 è marco)
*/
const [name_1, , luigi, federico] = names

console.log(name_1, luigi, federico);

// using SPREAD (...) creao un nuovo oggetto aggiungendo una proprietà al contenuto dell'oggetto person (in questo caso un array)
//esempio con un OGGETTO

const anotherPerson = { ...person, tools: ['spada leaser', 'forza'] }
console.log(anotherPerson);

/*se NON usassi SPRED (...) creerei un oggetto con un oggetto dentro (tools)
const anotherPerson = {person, tools:['spada leaser', 'forza']}
console.log(anotherPerson);
*/

//esempio con un ARRAY: creao un nuovo array aggiungendo 2 elementi al contenuto dell'array names 

const otherNames = [...names, 'stefano', 'filippo']
console.log(otherNames);

/*se NON usassi SPRED (...) creerei un arrey con un array dentro (names)
const otherNames = [...names, 'stefano', 'filippo']
console.log(otherNames);
*/

