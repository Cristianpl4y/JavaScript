let a = 1
console.log(a);

function primeiroValor(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const emMinusculo = letra => letra.toLowerCase(); 

new Promise(function(cumprirPromessa){
    cumprirPromessa(['Hulk', 'Homen de Ferro', 'Aquamen'])
})

.then(primeiroValor)
.then(primeiraLetra)
.then(emMinusculo)
.then(console.log)

