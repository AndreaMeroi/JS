/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

tools:
- FOR Cicle
- variabile d'appoggio per non sovrascrivere i che da numero si trasformerebbe in stringa
-IF/ELSE IF/ELSE IF/ELSE
- 
*/

// Scrivi un programma che stampi i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // creo una variabile d'appoggio in cui salvare i quando diventa stringa 

    let output = i

    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

    if (i % 3 === 0 && i % 5 === 0) {

        output = 'fizzBuzz'
        console.log(output);

    }

    //per i multipli di 3 stampi “Fizz” al posto del numero

    else if (i % 3 === 0) {

        output = 'Fizz'
        console.log(output);

    }

    //per i multipli di 5 stampi Buzz

    else if (i % 5 === 0) {

        output = 'Buzz'
        console.log(output);

    }

    // se i non è multiplo ne di 3 ne di 5 allora scrivi il numero

    else {

        console.log(output);
    }


}