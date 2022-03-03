function Carro(VelocidadeMaxima = 200, delta = 5){
    //atributo privado 
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= VelocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = VelocidadeMaxima
        }
    }

    // metodo publico
    this.getVolocidadeAtual = function(){
        return velocidadeAtual
    }


}

const uno = new Carro
uno.acelerar();
console.log(uno.getVolocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVolocidadeAtual())


console.log(typeof Carro)
console.log(typeof ferrari)
