/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 multiplicação e divisão desses valores.*/

function Calcule (a, b){
    const soma = a + b
    const subtracao = a - b
    const multiplicao = a * b
    const divisao = a / b
    return {soma, subtracao, multiplicao,divisao}
}

console.log(Calcule(5,9))


/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function getTipoTriangulo(p1, p2, p3){
    if(p1 == p2 && p2 == p3){
        return  'Equilátero: Os três lados são iguais.'
    }else if(p1 == p2 || p2 == p3 || p1 == p3 ){
        return 'Isósceles: Dois lados iguais.'
    }else{
        return 'Escaleno: Todos os lados são diferentes.'
    }
}

console.log(getTipoTriangulo(1, 1, 1));
console.log(getTipoTriangulo(1, 1, 2));
console.log(getTipoTriangulo(1, 2, 3));

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function baseExpoente(base, expoente){
    const result = Math.pow(base,expoente)
    return result
}

console.log(baseExpoente(2,7))

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function div (dividendo, divisor) {
    let resultado = Math.floor(dividendo/divisor)
    let resto = dividendo % divisor

    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${resto}`)
}

div(250, 4)

/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function formatoEmReal(valor){
    const valorFormatado = valor.toFixed(2).toString().replace(".", ",")
    return 'R$' + valorFormatado
}

let valor = 0.1 + 0.2
console.log(formatoEmReal(valor))

/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function funcao1(capital, taxa, tempo){
    const jurosSimples = capital + (capital * taxa * tempo)
    return jurosSimples
}

function funcao2(capital, taxa, tempo){
    const jurosCompostos = capital * (1 + taxa) ** tempo
    return jurosCompostos
}

console.log(formatoEmReal(funcao1(100, 10/100, 2)));
console.log(formatoEmReal(funcao2(100, 10/100, 2)));

/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function formula_de_bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(formula_de_bhaskara(1, 3, 2))
console.log(formula_de_bhaskara(3, 1, 2))

/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [2, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

let pontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function comparaValores(pontuacoes){
    let pontos = pontuacoes.split(', ')
    let recorde = 0
    let piorJogo = 1
    let maiorPonto = pontos[0]
    let menorPonto = pontos[0]

    for(let i = 1; i < pontos.length; i++){
        
        if(pontos[i] > maiorPonto) {
            maiorPonto = pontos[i]
            recorde++
        }else if (pontos[i] < menorPonto) {
            menorPonto = pontos[i]
            piorJogo = i+1;
        }

    }
    return [recorde, piorJogo]
}

console.log(comparaValores(pontuacoes))

/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

function classificacao(nota){
    
    let notaCorrigida = arredondar(nota)

    if(notaCorrigida >= 40){
        console.log(`Aprovado com nota ${notaCorrigida}`);
    }else{
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

classificacao(100)
classificacao(30)
classificacao(38)
classificacao(88)
classificacao(61)

/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))


/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

let currentTime = new Date()
let ano = currentTime.getFullYear()
console.log(ano)
console.log(calcularAnoBissexto(ano))
console.log(calcularAnoBissexto(2020)) 


// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
console.log(fatorial(15))
console.log(fatorial(20))



