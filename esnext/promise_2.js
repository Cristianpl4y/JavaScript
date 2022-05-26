//Exempo de callback Hell (Inferno das callbacks)
/* setTimeout(function() {
    console.log(`Executando callback...`)
    
    setTimeout(function(){
        console.log(`Executando callback...`)
        
        setTimeout(function(){
            console.log(`Executando callback...`)
        }, 2000)
    }, 2000)
}, 2000) */

// Exemplo com Promises 
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(`Executando Promise... tempo: ${tempo}`)
            resolve()
        },tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)