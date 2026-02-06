console.log('hi');


const names = [
    'Andrea',
    'Martina',
    'Mario'
]

for (let i = 0; i < names.length; i++) {
    const name = names[i]

    console.log(names[i]);

}

// METODO FOR EACH

//with ''function'' keyword
names.forEach(function (name, index, array) {

    console.log(name);
    console.log(index);
    console.log(array);

})

//with arrow function
names.forEach((name, index, array) => {

    console.log(name);
    console.log(index);
    console.log(array);

})

// METODO FOR EACH in un ARRAY di OGGETTI 

const products = [
    {
        name: 'laptop',
        price: 120,
        link: 'www.laptop.com'
    },
    {
        name: 'mouse',
        price: 10,
        link: 'www.mouse.com'
    },
    {
        name: 'keyboard',
        price: 90,
        link: 'www.keyboard.com'
    }
]

products.forEach((product) => {
    console.log(product);

})

//con la DOT notation posso accedere al singolo valore dentro l'elemento 

products.forEach((product) => {
    console.log(product.price);

})


// METODO MAP 

const students = [
    { firstname: 'Mario', lastname: 'rossi' },
    { firstname: 'Giorgio', lastname: 'Verdi' },
    { firstname: 'Luca', lastname: 'Bianchi ' }
]

// raccogliamo in un array i nomi di tutti gli studenti


/* -Esempio della stessa operazione con il ciclo for-

// variabile d'appoggio in cui pushare la variabile fullName
const studentsNames = []

for (let i = 0; i < students.length; i++) {
    const student = students[i];
   
    console.log(student);
    console.log(student.firstname);
    console.log(student.lastname);
 
    const fullName = `${student.firstname} ${student.lastname}`
    console.log(fullName);

    studentsNames.push(fullName)
    
}

console.log(studentsNames);
*/

/* -Esempio della stessa operazione con FOREACH-
const studentsNames = []
 
students.forEach((student)=>{
     const fullName = `${student.firstname} ${student.lastname}`
    console.log(fullName);

studentsNames.push(fullName)
})

console.log(studentsNames);
*/

// UTILIZZO MAP AVERE LO STESSO RISULTATO DELLE OPERAZIONI PRECEDENTI

const studentsNames = students.map((student) => {
    return `${student.firstname} ${student.lastname}`
})
console.log(studentsNames);

//ESERCIZIO CON LA CONSTANTE PRODUCTS

const productPrice = products.map((product) => {
    return `${product.name} ${product.price}`
})
console.log(productPrice);

//METODO FILTER 


const studenti = [
    { id: 1, name: 'Mario', year: 1 },
    { id: 1, name: 'Giorgio', year: 2 },
    { id: 1, name: 'Luca', year: 1 }
]

/* selezionare gli studenti al primo anno con il ciclo FOR
// variabile d'appoggio 
const studentiPrimoAnno = []

for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i]
    console.log(studente);

    if (studente.year === 1) {
        studentiPrimoAnno.push(studente)
    }

}
console.log(studentiPrimoAnno);*/


/* selezionare gli studenti al primo anno con FOREACH
// variabile d'appoggio 
const studentiPrimoAnno = []

studenti.forEach((studente) => {
    console.log(studente);
    if (studente.year === 1) {
        studentiPrimoAnno.push(studente)
    }
});
console.log(studentiPrimoAnno);*/

// UTILIZZO FILTER AVERE LO STESSO RISULTATO DELLE OPERAZIONI PRECEDENTI

/* VERSIONE ESTESA
const studentiPrimoAnno = studenti.filter((studente) => {
   if (studente.year === 1) {
        return true
    }
    return false
     
    return studente.year === 1
})

console.log(studentiPrimoAnno);

VERSIONE  SINTETICA CON TRUE E FALSE IMPLICITI
const studentiPrimoAnno = studenti.filter((studente) => {
     
    return studente.year === 1
})
console.log(studentiPrimoAnno);

*/


//VERSIONE  SINTETICA CON TRUE,FALSE E RETURN IMPLICITI

const studentiPrimoAnno = studenti.filter(studente => studente.year === 1)
console.log(studentiPrimoAnno);


// METODO FIND

const people = [
    { id: 3, name: 'Mario', age: 32 },
    { id: 4, name: 'Giorgio', age: 42 },
    { id: 5, name: 'Luca', age: 51 }
]

//recupera la persona con id:3 risultato {id: 3, name: 'Mario', age: 32 }

/*
//con ciclo for

let foundPerson // uso una variabile non definita perchè non devo creare un array in questo caso 

for (let i = 0; i < people.length; i++) {
    const person = people[i]
    console.log(person);

    if (person.id === 3) {
        // non devo pushare in questo caso perchè non è richiesto di creare un array 
        foundPerson = person
    }
}
console.log(foundPerson);


//con FOREACH


people.forEach((person) => {
    if (person.id === 3) {
        foundPerson = person

    }
})
console.log(foundPerson);
*/

/* VERSIONE ESTESA
const foundPerson = people.find((person) => {
    if (person.id === 3) {
     return true

    }
})
console.log(foundPerson);
*/

// VERSIONE SINTETICA 

const foundPerson = people.find(person => person.id === 3)
console.log(foundPerson);
