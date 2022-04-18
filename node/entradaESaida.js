const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')

    // Evendo On('data'), digitar alguma coisa no teclado e dar enter
    process.stdin.on('data', data => {
        const nome = data.toString()
        
        process.stdout.write(`Fala ae ${nome} beleza?`)
        process.exit()
    }) 
}