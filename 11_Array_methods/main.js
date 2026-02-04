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
