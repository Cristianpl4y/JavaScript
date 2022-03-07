// Factory simples 

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

/**
 *  Podemos resumir uma função Factory (fábrica) como um gerador de objetos. 
 *  Em JavaScript, qualquer função pode retornar um objeto.
 *  Mas, quando isso acontece sem o new, é uma função Factory.
 *  Ou seja, quando uma função não é uma classe ou um construtor, é uma função Factory
 */