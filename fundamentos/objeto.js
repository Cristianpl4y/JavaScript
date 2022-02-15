/* Objeto em javascript é uma coleção de chave e valor */

const prod1 = {} // forma literal de escrever um objeto.

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço, mas é possivel utilizar com espaços!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

'{ "nome": "Biscoito", "preco": 1.99 }' // JSON não é a mesma coisa que objeto, Json é um formato textual. 


