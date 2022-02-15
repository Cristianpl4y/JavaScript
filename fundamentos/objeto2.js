console.log(typeof Object) // função 
console.log(typeof new Object()) // objeto 

const Cliente = function(){}
console.log(typeof Cliente) // função 
console.log(typeof new Cliente) // objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // função 
console.log(typeof new Produto) // objeto