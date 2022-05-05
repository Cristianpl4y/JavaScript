// Com promises... 
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end' , () => {
               try {
                   resolve(JSON.parse(resultado))
               }catch (e){
                    reject(e)
               }
            })
        })
    })
}

// Callback Hell que pode ser resolvido com Promise...
// let nomes = []
// getTurma('a', alunos => {
//     nomes = nomes.concat(alunos.map(turmaA => `Turma A: ${turmaA.nome}`))
//     getTurma('b', alunos => {
//         nomes = nomes.concat(alunos.map(turmaB => `Turma B: ${turmaB.nome}`))
//         getTurma('c', alunos => {
//             nomes = nomes.concat(alunos.map(turmaC => `Turma C: ${turmaC.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// Refatorando usando Promises..
Promise.all([getTurma('a'),getTurma('b'),getTurma('c')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(err => console.log(err.message))