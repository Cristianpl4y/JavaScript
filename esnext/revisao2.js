// Arrow Function
const soma = (a, b) => a + b
console.log(soma(5,5))

// Arrow Function (this)
const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log() // valor padrão 
log(undefined) // valor padrão 
log(null) 
log('Gravo')

// Operador rest 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))