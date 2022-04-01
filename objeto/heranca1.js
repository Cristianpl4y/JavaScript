const ferrari = {
    modelo: 'F40',
    VELmAX : 324
}

const volvo = {
    modelo: 'V40',
    VELmAX : 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)

console.log(Object.prototype.__proto__)