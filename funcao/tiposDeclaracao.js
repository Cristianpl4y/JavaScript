console.log(soma(1, 1)) // somente da certo pois a função declarada é interpretada primeiro. 
//console.log(sub(2, 1))  erro 
//console.log(mult(2, 5)) erro 

// function declaration 
function soma(a, b){
    return a + b
}

// function expression 
const sub =  function (b, c) {
    return b - c
}
console.log(sub(2, 1)) // da certo 

// named function expression
const mult = function mult(a, b){
    return a * b
}
console.log(mult(2, 5)) // da certo