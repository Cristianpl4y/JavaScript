// O escopo de uma variável declarada com var é seu contexto atual em execução, o qual é a função a qual pertence ou,
// para variáveis declaradas fora de qualquer função, o escopo é o global. 

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// por conta do seu escopo ser global, o valor de numero sera sobrescrito. 