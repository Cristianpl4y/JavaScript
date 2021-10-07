/**
 * Descrição. let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
 * Isso é inverso da keyword var , que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.
 */

// Primeiro exemplo 
// var numero = 1 
// {
//     let numero = 2
//     console.log('dentro =', numero)
// }
// console.log('fora =', numero)


// segundo exemplo
// let numero = 1 
// {
//     let numero = 2
//     console.log('dentro =', numero)
// }
// console.log('fora =', numero)


// Terceiro exemplo 
let numero = 1 
{
    let numero2 = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)


/* 
    Variaveis definidas com var 
    1 - Tem escopo Global
    2 - Tem escopo de Função 

    Variaveis definidas com let
    1 - Tem escopo Global
    2 - Tem escopo de Função
    3 - Tem escopo de Bloco 
*/
