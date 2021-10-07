// Problema Historico do javascript  

var funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// pelo fato de var não ter escopo de função ele mostra 10 para qualquer resultado nesse caso.
