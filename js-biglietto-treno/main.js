/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 



*/

//ask for user age

const userAge = prompt('type your age')
console.log(userAge);


//ask for how many km to travel

const userKm = prompt('Type how many km you want to fravel for')
console.log(userKm);

// price = 0.21 * n km
let kmCost = 0.21 * userKm
console.log(kmCost);

//elaborate final price12

let price = ''


// calculate 20% discount IF user age < 18 

if (userAge <= 20) {

    price = kmCost * 0.80
}
// calculate 40% discount ELSE IF user age > 65

else if (userAge >= 65) {

    price = kmCost * 0.60
}
// ELSE calculate 20% discount IF user age < 18 

else {
    price = kmCost
}
console.log(typeof price);

let finalPrice = price.toFixed(2);

console.log(finalPrice);









