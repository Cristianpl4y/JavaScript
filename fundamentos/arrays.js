const valores = [1, 2, 3, 4]
console.log(valores[0], valores[3]) // 1 e 4
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores) // passou para o indice 4 do array o numero 10.

console.log(valores.length) // vai dizer quantos elementos eu tenho no array

valores.push({id: 3}, false, null, 'teste') // posso misturar coisas dentro de um array, mas não é uma boa pratica!
console.log(valores)

console.log(valores.pop()) // O método pop remove o último elemento de um array e retorna aquele valor.

delete valores[0]
console.log(valores)

console.log(typeof valores) // array em javascript é do tipo object

