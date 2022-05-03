function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject(frase)
        }, segundos * 1000)
        
    })
}

falarDepoisDe(3, 'Que show!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // forma que posso tratar um erro em uma promise