/**
 * Ejercicios de ES6
 * https://github.com/grupogenesys/curso-desarrollo
 */

const Productos = require('./class/productos')
const Alimentos = require('./class/alimentos')

/*let myVar = '';

const fn = (params) => {
    // TODO: Actions
}*/

const productos = new Productos('chocolate');
const alimentos = new Alimentos()


console.log(`Usted escogio como su producto el:`);
console.log(productos.nombre);
console.log(alimentos.preguntar());
console.log(`¿Cuanto vale?`);
console.log(`Su valor es: ${alimentos.precio}`);
console.log(`Hay`);
console.log(alimentos.cantidad);
console.log(`También le tengo`);
console.log(alimentos.lacteos);
console.log(`Gracias`);
console.log(alimentos.comprar());
console.log(`Y luego`);
console.log(Alimentos.cotizar());
console.log(`Otros productos`);

//console.log(`los ${Alimentos.name} son`); // concatenar