Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        if(callback(this[i], i , this)){
            newArray.push(this[i])
        }
    }

    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499 , fragil: true},
    {nome: 'Iphone pro', preco: 4199 , fragil: true},
    {nome: 'Copo de Vidro', preco: 12.50 , fragil: true},
    {nome: 'Copo de Plástico', preco: 10.00 , fragil: false},
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))