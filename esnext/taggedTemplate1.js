// tagged templetes -> Processar o template dentro de uma funcão.
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Zezinho'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)