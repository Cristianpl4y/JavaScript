// Pessoa -> 123 -> {...}
const pessoa =  {nome: 'Maria'}
pessoa.nome = 'João'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Bravo'}

//Congelando o obj pessoa 
Object.freeze(pessoa)

pessoa.nome = 'Tentando Mudar o Obj Congelado'
console.log(pessoa)

const pessoaConstante = Object.freeze({objeto: 'nasce constante'})
console.log(pessoaConstante)