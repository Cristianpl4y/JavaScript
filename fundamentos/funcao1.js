/**
 *  Funções são blocos de construção fundamentais em JavaScript. 
 *  Uma função é um conjunto de instruções que executa uma tarefa ou calcula um valor.
 *  Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 6, 7, 9)
imprimirSoma()

// Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
