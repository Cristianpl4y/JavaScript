const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}

// OBJ para JSON
console.log(JSON.stringify(obj))

// JSON para OBJ
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
