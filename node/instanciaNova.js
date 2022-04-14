// Uma Factory retorna um novo Obj
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}