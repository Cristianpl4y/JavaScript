/*
Escopos léxicos.
O trecho do código em que uma variável qualquer é identificada por um nome é definido como o escopo léxico da variável. 
Fora desse bloco, a variável é indefinida ou um outro valor é identificado por esse nome.
*/

const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}


function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()