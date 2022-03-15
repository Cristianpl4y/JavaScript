// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']

const carro = { 
    modelo: 'BMW',
    valor: 100000,
    proprietario: {
        nome: 'Cristian',
        idade: 23,
        endereco: {
            rua: 'tal',
            cep: 221232130
        }

    },
    condutores: [{
        nome: 'Fulano',
        idade: 20
    },{
        nome: 'Fulano 2',
        idade: 21
    }],

    calcularValorSeguro: function(){
        //...
    }

}

// formas de acessar os dados de um objeto
carro.proprietario.endereco.cep = 0
carro['proprietario']['endereco']['rua'] = 'Logo ali'

console.log(carro)

// delentando atributos de um objeto
delete carro.condutores

console.log(carro)