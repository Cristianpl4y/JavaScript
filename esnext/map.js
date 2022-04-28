const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // maneira errada de acessar 
console.log(tecnologias.get('react').framework) // maneira correta de acessar


const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor , chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)