/** O método Object.preventExtensions()
 * impede que novas propriedades sejam adicionadas a um objeto 
 * (isto é, impede futuras extensões ao objeto). */

// Exemplo..
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto)) // Verifico se o Obj é extensível 

produto.nome = 'Dell' // posso alterar um atributo
delete produto.tag // posso deletar um atributo
produto.descricao = 'Você está protegendo o nosso futuro!' // não consigo adicionar um novo atributo

console.log(produto)

/**
 * O método Object.seal() sela um Objeto, evitando que novas propriedades sejam adicionadas à ele
 * e marcando todas as propriedades existentes como não configuráveis. 
 * Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).
 */

// Exemplo..

const pessoa = { nome: 'Morbidus' , idade: 'velhão' }
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa)) // Verifico se o obj é selado.

pessoa.sobrenome = 'Zezinho' // Não consigo adicionar novos atributos
delete pessoa.nome // Não consigo deletar atributos
pessoa.idade = 'tampinha' // Só posso alterar os atributos que tem no obj

console.log(pessoa)

/*
    O método Object.freeze() congela um objeto:
    isto é, impede que novas propriedades sejam adicionadas a ele;
    impede que as propriedades existentes sejam removidas; 
    e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas.
    Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.
*/

//Exemplo

const AeraDoGelo = { personagem1: 'Sid', personagem2: 'Diego',  personagem3: 'Many'}
Object.freeze(AeraDoGelo)

AeraDoGelo.personagem1 = 'Scrat' // Não consigo mudar
AeraDoGelo.personagem2 = 'Bebê'
AeraDoGelo.personagem3 = 'Buck'
AeraDoGelo.personagem4 = 'Preguiça fêmea' // Não consigo adicionar novo atributo 

delete AeraDoGelo.personagem1 // Não consigo deletar

console.log(AeraDoGelo) 


 






