
console.log('Ciclo For');

// for loop 

/*
for keyword 
(counter; condition, increment/decrement)
{ your code to repeat here} 
 */

console.log('INCREMENTO');



for (let i = 0; i < 5; i++) {

    console.log(i);

}



// i = 0 ? 0 < 6 = true // your code rund -> i = 0 + 1
// i = 1 ? 1 < 6 = true // your code rund -> i = 1 + 1
// i = 2 ? 2 < 6 = true // your code rund -> i = 2 + 1
// i = 3 ? 3 < 6 = true // your code rund -> i = 3 + 1
// i = 4 ? 4 < 6 = true // your code rund -> i = 4 + 1
// i = 5 ? 5 < 5 = false // your code stops running / end of the loop 


console.log('DECREMENTO');



for (let i = 5; i > 0; i--) {

    console.log(i);

}

console.log('ESERCIZIO stampare da 1 a 25 e moltiplicare il numero risultante x 2');


for (let i = 0; i <= 25; i++) {

    console.log(i * 2);
}

console.log('ESERCIZIO stampare da 25 a 1');

for (let i = 25; i > 0; i--) {

    console.log(i);

}

console.log('ESERCIZIO stampa numeri da 0 a 15');

for (let i = 0; i <= 15; i++) {

    console.log(i);

}

console.log('ESERCIZIO stampa numeri da 25 a 75');

for (let i = 25; i <= 75; i++) {

    console.log(i);

}

console.log('ESERCIZIO stampa numeri da 75 a 50');

for (let i = 75; i >= 50; i--) {
    console.log(i);
    document.writeln(i) // per stampare in pagina anzichè in console

}

console.log('ESERCIZIO stampa 10 vole QUESTA è L ITERAZIONE N..');

for (let i = 0; i <= 10; i++) {

    console.log(i);
    document.writeln(`Questa è l'iterazione n^ ${i}`)

}