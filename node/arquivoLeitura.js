const fileSystem = require('fs')

const caminho = __dirname + '/arquivo.json'

// Ler de forma sincrono.. Não recomendado pode travar o Event Loop (Laço de Eventos)
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// Ler de forma assincrono..
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    if(!err){
        const config =  JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

// Ler arquivo JSON
const config = require('./arquivo.json')
console.log(config.db.host)

// Ler Pasta 
fileSystem.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 