function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

const obj = [50, 40]
console.log(rand(obj))
console.log(rand([955]))
console.log(rand([,9]))
console.log(rand([]))
//console.log(rand())// erro
