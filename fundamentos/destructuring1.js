// Novo recurso do ES2015
// A sintaxe de atribuição via desestruturação (destructuring assignment) 
// é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

const pessoa = {
    nome: 'Ana',
    idade: 17,
    endereco: {
        logradouro: 'Rua logo ali',
        numero: 660
    }
}

const { nome, idade} = pessoa 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, qualquerCoisa = true } = pessoa
console.log(sobrenome, qualquerCoisa)

const { endereco: {logradouro , numero, cep } } = pessoa
console.log(logradouro, numero, cep)