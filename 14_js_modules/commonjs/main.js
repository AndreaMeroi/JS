// import the module (single exports)
// const sum = require('./functions.js')

// destrutturando l'oggetto importato, posso importare più elementi risparmio codice
const { sum, multiply, division } = require('./functions')


sum(1, 4)
multiply(2, 3)
division(10, 2)