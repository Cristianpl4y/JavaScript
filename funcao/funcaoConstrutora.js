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