// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco : {
        rua: 'logo ali',
        numero: 123
    }
}


console.log(saudacao)
console.log(exec())
console.log(Cliente)
