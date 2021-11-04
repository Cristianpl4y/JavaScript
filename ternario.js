// O operador condicional (ternário) é o único operador JavaScript que possui três operandos. 
// Este operador é frequentemente usado como um atalho para a instrução if .

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.0))
