console.log(7 / 0) // Valor Infinito em algumas linguagens daria ERRO, mas no js ele retorna Infinity.

console.log("10" / 2) // Em muitas linguagens isso aqui não daria certo, mas em js por sua tipagem ser fraca ele entende e retorna 5.

console.log("Show!" * 2) // Em algumas linguagens iria retorna Show 2 vezes, porem no js ele entende que show não é um número e retorna "NaN".

console.log(0.1 + 0.7) /* vai dar um numero que não é 0.8 por conta especificação do tipo de operação com ponto flutuante, então tomar cuidado
                        pois algumas operações de ponto flutuante podem não ser tão precisas. */

//console.log(10.toString()) // dessa forma não funciona.

console.log((10).toFixed(2)) // dessa forma funciona.
