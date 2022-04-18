const schedule = require('node-schedule')

// Criando tarefa agendada
const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 1', function(){
    console.log(`Executando tarefa 1!`, new Date().getSeconds())
})

// Cancelando uma tarefa
setTimeout(function(){
    tarefa1.cancel() // Forma de cancelar uma tarefa scheduleJob
    console.log('Cancelando tarefa 1!')
}, 20000)


// Criando tarefa agendada com regra de recorrencia 
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // Dias da semana  0 = Domingo , 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sabado
regra.hour = 9 // Hora 
regra.second = 33 // Executar no segundo determinando

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log(`Executando tarefa 2!`, new Date().getSeconds())
})
