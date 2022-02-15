Number.prototype.entre = function(ini , fim){
    return this >= ini && this <= fim
}

const imprimir = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3)){
        console.log('Reprovado')
    }else{
        console.log('Nota Inválida')
    }
}

imprimir(10)
imprimir(8.9)
imprimir(6.55)
imprimir(2.3)
imprimir(-1)
imprimir(11)