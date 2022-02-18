const frabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

frabricantes.forEach(imprimir)

frabricantes.forEach(function (a){
    console.log(a)
})


frabricantes.forEach(fabricantes => console.log(fabricantes))