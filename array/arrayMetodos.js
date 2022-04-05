const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// O método pop() remove o último elemento de um array e retorna aquele elemento.
pilotos.pop() // Massa quebrou o carro! 
console.log(pilotos)

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
pilotos.push('Verstappen')
console.log(pilotos)

// O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
pilotos.shift() // Vettel quebrou o carro! 
console.log(pilotos)

// O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
pilotos.unshift('Hamilton')
console.log(pilotos)

// O método splice() pode adicionar e remover elementos

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa') // Massa arrumou o carro e voltou pra corrida :)
console.log(pilotos)

// remover 
pilotos.splice(3, 1) // Massa quebrou novamente :( 
console.log(pilotos)

/* O método slice() retorna uma cópia de parte de um array a partir de um subarray 
criado entre as posições início e fim (fim não é necessário) de um array original. 
O Array original não é modificado. */
const algunsPilotos1 = pilotos.slice(2) // pega um pedaço do array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)