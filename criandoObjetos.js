// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras 
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Tv', 2999.80, 0.15)
const p2 = new Produto('Tv 32', 1788.99, 0.10)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Função Factory 
function criarFunc(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFunc('Dr. Estranho', 10000.00, 15)
const f2 = criarFunc('Iron Man', 10000.00, 29)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma Função famosa que retorna um Objeto..
const fromJSOM = JSON.parse('{"teste": "Sou um JSON"}')
console.log(fromJSOM)

