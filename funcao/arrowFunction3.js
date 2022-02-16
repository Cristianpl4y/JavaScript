let comaparaComThis = function (param){
    console.log(this === param)
}

comaparaComThis(global)
comaparaComThis(this)

const obj = {}
comaparaComThis = comaparaComThis.bind(obj)
comaparaComThis(global)
comaparaComThis(obj)


let comaparaComThisArrow = param => console.log(this === param)
comaparaComThisArrow(global)
comaparaComThisArrow(module.exports)
comaparaComThisArrow(this)

comaparaComThisArrow = comaparaComThisArrow.bind(obj)
comaparaComThisArrow(obj)
comaparaComThisArrow(module.exports)