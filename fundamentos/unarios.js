let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

 // O resultado é true porq o ++num1 foi executado antes da comparação  e o num2-- é uma forma posfixada só foi executada depois de comparar
console.log(++num1 === num2--)
// Obs Muito importante, Deixe o código o mais simples possível s
console.log(num1 === num2)
