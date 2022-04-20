// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))

// usar spread com Objeto 
const funcionario = { nome: 'Maria', salario: 1234.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array 
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA , 'Rafaela' ]
console.log(grupoFinal)