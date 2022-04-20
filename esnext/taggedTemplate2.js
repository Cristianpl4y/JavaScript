function real(partes, ...valores){
    const r = []
    valores.forEach((valor, i) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        r.push(partes[i], valor)
    })
    return r.join('')
}

const preco = 49.99
const precoParcela = 10
console.log(real `1x de ${preco} ou 5x de ${precoParcela}`)