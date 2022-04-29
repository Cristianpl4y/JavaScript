// Não aceita repetição/não indexada
const times = new Set()
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Botafogo'))
times.delete('vasco')
console.log(times.has('vasco'))

const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Maria']
const nomesSet = new Set(nomes)
console.log(nomesSet)



