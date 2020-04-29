class Productos {

    constructor(nombre = '') {
        this.nombre = nombre
        this.precio = `${5000}  pesos`
        this.cantidad = `${15}  unidades`
    }

    preguntar() {
        return "yo quiero averiguar ..."
    }

    static cotizar() {
        return "yo quiero cotizar ..."
    }

}

// export default Person
module.exports = Productos