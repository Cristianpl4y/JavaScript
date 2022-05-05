// sem promises... 
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end' , () => {
            callback(JSON.parse(resultado))
        })
    })
}

// Callback Hell que pode ser resolvido com Promise...
let nomes = []
getTurma('a', alunos => {
    nomes = nomes.concat(alunos.map(turmaA => `Turma A: ${turmaA.nome}`))
    getTurma('b', alunos => {
        nomes = nomes.concat(alunos.map(turmaB => `Turma B: ${turmaB.nome}`))
        getTurma('c', alunos => {
            nomes = nomes.concat(alunos.map(turmaC => `Turma C: ${turmaC.nome}`))
            console.log(nomes)
        })
    })
})
