// import using commonjs 
/*
const fullName = require('./name.js')
const hobbies = require('./hobbies.js')
*/

// import using ESM 
import fullName from './name.js'
import hobbies from './hobbies.js'

console.log(fullName('marco', 'rossi'));
console.log(hobbies('trekking', 'running', 'jogging'));




function user() {
    return {
        fullName: fullName('marco', 'rossi'),
        hobbies: hobbies('trekking', 'running', 'jogging')
    }
}

console.log(user());


