function esperarPor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
            //console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

/* esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
    .then(esperarPor) */


async function executar(){
     
    await esperarPor(1500)
    console.log('Async/Await 1...')

    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')

}

executar()
