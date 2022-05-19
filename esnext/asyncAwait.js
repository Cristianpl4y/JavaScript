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

// Recurso do EC8 - Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('a')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('c')
    
    // Retorna um obj AsyncFunction
    return [].concat(turmaA, turmaB, turmaC); 

}

obterAlunos()
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))