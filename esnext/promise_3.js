function gerarNumerosEntre(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const f = max - min + 1
        const aleatorio = parseInt(Math.random() * f) + min
        resolve(aleatorio)

    })
}

gerarNumerosEntre(10, 30)
    .then(console.log)