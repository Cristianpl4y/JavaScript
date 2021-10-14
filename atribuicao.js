/*
    Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita. 
    O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. 
    Isto é, x = y atribui o valor de y a x.
*/
const a = 7
let b = 3

b += a // Atribuição aditiva então b = b + a
console.log(b) // valor 10

b -= 4 // Atribuição de subtração então b = b - 4
console.log(b) // valor 6

b *= 2 // Atribuição de multiplicação então b = b * 2
console.log(b) // valor 12

b /= 2 //Atribuição de divisão então b = b / 2 
console.log(b) // valor 6


b %= 2 //Atribuição de resto então b = b % 2 
console.log(b) // valor 0