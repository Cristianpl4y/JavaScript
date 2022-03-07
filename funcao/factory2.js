function criarProduto(nome, preco){
    return {
        prodNome: nome,
        prodPreco: preco,
        prodDesconto: '10%'
    }
}

console.log(criarProduto('Arroz', 30))
console.log(criarProduto('feijão', 60))
console.log(criarProduto('Coca-cola', 10))