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


const user = {

    name: 'fabio',
    age: 30
}

// module.exports = sum // exports only sum

// export multipe features

module.exports = {
    sum,
    user,
    multiply,
    subtraction,
    division
}

