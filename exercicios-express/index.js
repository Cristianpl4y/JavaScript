const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const userApi = require('./api/usuario')

// Comunicação entre modulos
// Chamada em unica linha
// require('./api/produto')(app, 'com param!') ou 
const produtoApi = require('./api/produto')
produtoApi(app, 'Algo aqui!')

app.post('/usuario', userApi.salvar)
app.get('/usuario', userApi.obter)


app.use(bodyParser.text()) 
app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(saudacao('Cristian'))

app.use((req, res, next) => {
    console.log('Antes..')
    next()
})


app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo', (req , res) => {
    /* let corpo = ''
    req.on('data', function(parte) {
        corpo += parte 
    })

    req.on('end', function() {
        res.send(corpo)
    }) */

    res.send(req.body)
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa',(req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, nome: 'Cristian' , position: 1},
            {id: 37, nome: 'Pessanha' , position: 2},
            {id: 27, nome: 'da Silva' , position: 3},
        ],
        contador: 30,
        proximo: 0,
        limite: 3,
        status: 200
    })

    next()

})

app.use((req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
