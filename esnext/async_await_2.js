function gerarNumerosEntre(min, max, numProibidos){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        
        const f = max - min + 1
       
        const aleatorio = parseInt(Math.random() * f) + min
        
        if(numProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function geraNumMegaSena(qtdNum){
    try {
        const num = []

        for(let _ of Array(qtdNum).fill()){
           num.push(await gerarNumerosEntre(1, 60, num))  
        }
        return num

    }catch(e){
        throw 'Droga n foi...'
    }
   
}

geraNumMegaSena(15)
    .then(console.log)
    .catch(console.log)