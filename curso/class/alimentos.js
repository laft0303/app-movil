// import Productos from './productos';
const Productos = require('./productos')

class Alimentos extends Productos {

    constructor() {
        super('tipo de Alimento')
        this.carnes = 'pollo'
        this.frutas = 'mango'
        this.granos = 'arroz'
        this.verduras = 'espinaca'
        this.lacteos = 'leche'
    }

    comprar() {
        return 'yo quiero comprar ...'
    }

}

// export default Teacher
module.exports = Alimentos