const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()


// Pelo fato do let ter escopo em bloco de codigo ele tem "memoria" dos valores da função.