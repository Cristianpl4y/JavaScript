Array.prototype.reduce2 = function(callback){
    const indiceIni = valorIni ? 0 : 1
    let acumulador = valorIni || this[0]
    for(let i = indiceIni; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma, 21))