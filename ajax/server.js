const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/*Multer é um middleware node.js para manipulação multipart/form-data, 
que é usado principalmente para fazer upload de arquivos.*/
const multer = require('multer')

// diskStorage é o mecanismo de armazenamento em disco oferece controle total sobre o armazenamento de arquivos em disco.
const storage = multer.diskStorage({
    destination: function (req, file, cal){
        cal(null, './upload')
    },
    filename : function (req, file , cal) {
        cal(null, `${Date.now}_${file.originalname}`)
    }
})

const upload = multer( {  storage : storage  } ).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // operador Spread
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Formas de recuperar os dados vindo do FrontEnd
    // req.body
    // req.query  url ex: '/parOuImpar?numero=1'
    // req.params  url ex: '/parOuImpar/317'
    
    const par = parseInt(req.query.numero) % 2 === 0 
    res.send({
        resultado: par ? 'par' : 'impar'
    })

})




// app.get('/teste', (req, res) => res.send('TESTANDO...'))
app.listen(8085, console.log('Executando...'))