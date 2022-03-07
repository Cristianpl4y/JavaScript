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








