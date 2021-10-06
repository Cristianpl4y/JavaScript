const escola = "Cod3r"

console.log(escola.charAt(4)) // vai me dar a letra no indice 4 da string "r"
console.log(escola.charAt(5)) // vai retorna um valor vazio
console.log(escola.charCodeAt(3)) // trazer o valor do indice 3 na tabela ASCII unicode
console.log(escola.indexOf('3')) // vai verificar se existe o valor 3 na string e retorna a posição que ele esta

console.log(escola.substring(1)) //pegar a string a partir do indice 1 então vai retorna "od3r"
console.log(escola.substring(0, 3)) // iniciando em 0 e terminando em 3 então vai retorna "Cod"

console.log('Escola ' .concat(escola) .concat("!")) // concatenando literal e variavel.

console.log(escola.replace(/\d/, 'e')) // tirando caracteres especiais usando uma expessão regular

console.log('Ana, joão, Maria, Pedro'.split(',')) // O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array