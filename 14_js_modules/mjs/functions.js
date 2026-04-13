function sum(numb_1, numb_2) {
    const result = numb_1 + numb_2
    return result
}

function multiply(numb_1, numb_2) {
    return numb_1 * numb_2
}

function subtraction(numb_1, numb_2) {
    return numb_1 - numb_2
}

function division(numb_1, numb_2) {
    return numb_1 / numb_2
}

const APIKEY = 'jkbwchoòohnohnòoh'


// default export (solo uno per file)
//export default sum

//named export 
export { sum, multiply, subtraction, division, APIKEY }