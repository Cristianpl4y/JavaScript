function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const f = max - min + 1
            const aleatorio = parseInt(Math.random() * f) + min
            resolve(aleatorio)
        }, tempo)

    })
}

function gerarVariosNumeros(){
    return Promise.all([
            gerarNumerosEntre(1, 10, 4000),
            gerarNumerosEntre(1, 20, 500),
            gerarNumerosEntre(1, 30, 3000),
            gerarNumerosEntre(1, 40, 1000),
            gerarNumerosEntre(1, 50, 2000),
    ])
}

console.time('tempo')
gerarVariosNumeros()
    .then(n => console.log(n))
    .then(() => {
        console.timeEnd('tempo')
    })