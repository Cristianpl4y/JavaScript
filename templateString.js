const nome = "Rebeca"
const concatenacao = 'Olá' + nome + '!' // não consigo utilizar mais de uma linha dessa maneira. 


// Utilizando template string consigo utilizar mais de uma linha.
/*
    Template Strings são strings que permitem expressões embutidas.
     Você pode utilizar string multi-linhas e interpolação de string com elas.
*/
const templateString = ` 
Olá
${nome}!
`
console.log(concatenacao, templateString)

// expressoes..
console.log(`1 + 1 = ${ 1 + 1 }`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)