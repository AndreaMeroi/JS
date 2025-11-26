
/*
inizializziamo due variabili che contengono 2 parole.
andiamo poi a verificare quale delle due è la più lunga e stampiamo 
in console un messaggio appropriato 

Tools 

const/let 
if/else if/else 
.length
relational operators
console.log

*/

// create variables 

const firstWord = 'Andrea'
const secondword = 'Meroi'

let message = ''

// check if the length of the first word is bigger than the second

if (firstWord.length > secondword.length) {

    message = `The first word ${firstWord} is longer than the second word ${secondword}`

    // otherwise ELSE IF the scondWord is longer than the firstword

} else if (secondword.length > firstWord.length) {
    message = `The second word ${secondword} is longer than the first word ${firstWord}`

    // ELSE their length is the same 

} else {

    message = `The two words ${firstWord} and ${secondword} length is the same`

}

// output - show a final message

console.log(message);



