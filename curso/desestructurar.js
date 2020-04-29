const dataJson = require('./data/tarea2.json')
const { userData } = dataJson

console.log(' BUSCAR lA POSICION 3 DE LA CONSTANTE USERDATA')
const [id1, id2, id3] = userData // en objeto indico que posicion quiero traer de mi userData se utiliza un destructuring
console.log(id3)

console.log('MODIFICAR, AL USUARIO CON ATRIBUTO "zipcode" 53919-4257')
console.log('y')
console.log('ID 6 y 9 AGREGAR 3 ATRIBUTOS')
userData.map(u => { // con MAP creo algun nuevo objeto de nuestro json 

    if (u.address.zipcode.includes('53919-4257')) { // buscamos con INCLUDES lo que nos piden de Zipcode y añadimos FAMILY
        Object.assign(u, {
            family: {
                id: 123456,
                relationship: "mama",
                nombre: "leidy"
            },

        })
    }

    if ([6, 7, 8, 9].includes(u.id)) { // buscamos con INCLUDES los ID entre 6 y 9 y añadimos  state,age,rh
        Object.assign(u, { state: '' }),
            Object.assign(u, { age: '' }),
            Object.assign(u, { rh: '' })
    }


    return u

})

console.log(userData)


console.log('FILTRAR LOS ID ENTRE 6 y 9')
const buscar = userData.filter(function(entre) {
    return entre.id >= 6 & entre.id <= 9
})
console.log(buscar)

/**
 * 

//const jsonFilter = userData.filter(i => i.id === 3);
//console.log(jsonFilter);

//const a = userData[2]
//console.log(a)

//const json = userData.find(r => r["correo electrónico"] == 'Rey.Padberg@karina.biz');
//console.log(json);

//const modificar = userData.map( item => { 
//  return { nombreUsuario: item.nombre , apellidoUsuario : item.apellido }; 
///});

//  console.log(arreglado);
//userData.i = userData['EstadoCivil', 'Edad', 'Sexo']
//agrega un nuevo campo  con sus datos de un registro ya creado
//Object.assign(userData, { i: ['EstadoCivil', 'Edad', 'Sexo'] })
//console.log(userData)
//userData.map(userData => {
//  if (userData.id == 1 & 2) {
//    Object.assign(userData, { estadoCivil, edad, sexo })
//}
//return userData
//})

 */
// userData = objeto  ,,,,,  id = propiedades