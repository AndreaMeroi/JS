console.log('hey there');

/*
// syntax

//IF ONLY

const condition = false

if (condition){
    // code to run
console.log('the condition is true');

}

console.log('I am out of the conditional statement')

// IF/ELSE

const condition = false

if (condition){
    // code to run
console.log('the condition is true');

} else {

    console.log('the condition is false');
    
}

console.log('I am out of the conditional statement')

// IF/ELSE IF/ELSE

const condition = false
const anotherCondition = true


if (condition){
    // code to run
console.log('the condition is true');

} else if (anotherCondition) {

    console.log('I am the condition else if');
    
} else {

    console.log('the condition is false');
    
}

console.log('I am outside of the conditional statement')
*/


// RELATIONAL OPERATORS
/*
const x = 4
const y = 5

if (x > y) {

    console.log(`x is ${x} and y is ${y} - x is greater than y`);

} else if (y > x) {

    console.log(`x is ${x} and y is ${y} - y is greater than y`);

} else {

    console.log('x is ${x} and y is ${y} - x and y are uqual');

}

console.log('I am outside of the conditional statement')

*/

// LOGICAL OPERATORS

const x = 5
const y = 3
const firstName = 'Andrea'


console.log(x > y);
console.log(firstName.length > 0);

console.log(x > y && firstName.length > 0); //true
console.log(x > y || firstName.length < 0); //true



if (x > y || firstName.length > 0) {

    console.log('inside block if');

} /*else if (y > x) {

    console.log(`x is ${x} and y is ${y} - y is greater than y`);

} else {

    console.log('x is ${x} and y is ${y} - x and y are uqual');

}

console.log('I am outside of the conditional statement')
*/