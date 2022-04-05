console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined 

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Duda')

console.log(aprovados.length)

aprovados[9] = 'Joãozinho'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

/**
 * O método sort() ordena os elementos do próprio array e retorna o array. 
 * A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.
 * A complexidade do tempo de execução ou a quantidade de memória utilizada
 *  pela ordenação não pode ser garantido e depende da implementação realizada. 
 */
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])


aprovados = ['Bia', 'Carlos', 'Ana']

// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados)