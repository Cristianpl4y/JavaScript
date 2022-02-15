// Os assessores de propriedade fornecem acesso as propriedades de um objeto usando a notação de ponto ou a notação de colchetes.

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'comgas' // notação de .
obj1['nome2'] = 'comgas2' // notação de []

console.log(obj1.nome)
console.log(obj1['nome2'])

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Marvel')
const obj3 = new Obj('DC')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()