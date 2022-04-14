const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

const Brasileiros = f => f.pais === 'Brazil'
const homens = f => f.genero === 'M'
const MaiorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario > funcionarioAtual.salario ? funcionario : funcionarioAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // Desafio: Mulher chinesa com menor salário? 
    const resposta = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(resposta)


    const resposta2 = funcionarios
        .filter(Brasileiros)
        .filter(homens)
        .reduce(MaiorSalario)
    console.log(resposta2)

})