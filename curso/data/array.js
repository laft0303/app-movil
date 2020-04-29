/*
*arreglo de objetos 6 Registros iniciales
un registro debe tener dentro del nombre la palabra 'Pedro'
*jsonArray : [
    {
        id: 1, name : 'Juan Perez', edad : 18},
]

array.push () 2 elementos nuevos
array.filter () Buscar los mayores de edad
array.find() buscar quien se llama Juan Pérez
array.find() buscar quien se el nombre contenga la palabra 'Pedro'
array.splice ()eliminar el elemento de la posicion 4
*/
/**
 * Ejercicios de ES6
 * https://github.com/grupogenesys/curso-desarrollo
 */

/**module.exports = {
    intArray: [1, 2, 3, 2, 5, 2],
    floatArray: [1.0, 2.1, 3.5],
    stringArray: ['a', 'b', 'c'],
    jsonArray: [
        { key: 'value1', id: 1 },
        { key: 'value2', id: 2 },
        { key: 'value3', id: 3 },
        { key: 'value1', id: 4 }
    ]
}*/
module.exports = {
    jsonArray: [
        { id: 1, name: 'Juan Pérez', edad: 18 },
        { id: 2, name: 'Pedro', edad: 50 },
        { id: 3, name: 'Andre Moreno', edad: 22 },
        { id: 4, name: 'Mariela', edad: 116 },
        { id: 5, name: 'Ingrid Medina', edad: 63 },
        { id: 6, name: 'Maria Valderrama', edad: 13 },
        { id: 7, name: 'Luis Mahecha', edad: 19 }


    ],

    fn: (name) => {
        return `Mi nombre es ${name}`
    },
    date: new Date(),






}