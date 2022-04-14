console.log(this === global) // falso fora de uma função
console.log(this === module) // falso 

console.log(this === module.exports) // true fora de uma função
console.log(this === exports) // true fora de uma função

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // 'this' não aponta para 'exports' dentro de uma função. 
    console.log(this === module.exports) // tambem não aponta para 'module.exports' dentro de uma função.

    console.log(this === global) // 'this' dentro de uma função aponta para o escopo 'global'

    this.perigo = `Muito cuidado ao acessar o this,
    porq se for dentro de uma função vai estar acessando global,
    se for fora vai estar acessando module.exports!
    `
}

logThis()