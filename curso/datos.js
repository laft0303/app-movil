const array = require('./data/array')
const jsonArray = array.jsonArray;

//array.push() 2 Elementos nuevos
jsonArray.push({ id: 8, name: 'Luis Forero', edad: 36 }, { id: 9, name: 'Wilson Muñoz', edad: 14 }); // agrego dos nuevos registros
console.table(jsonArray);

//array.filter() Buscar los mayores de edad
const jsonFilter = jsonArray.filter(l => l.edad >= 18); // filtra
console.log(jsonFilter);


//array.find() Buscar quien se llame Juan Pérez
const json = jsonArray.find(i => i.name === 'Juan Pérez'); // me trae solo el registro unico que estoy buscando el primero con las mismas caracteristicas
console.table(json);

//array.find() Buscar quien se el nombre contenga la palabra 'Pedro'
const json1 = jsonArray.find(i => i.name.includes('Pedro')); // me trae solo el registro solo que estoy buscando
console.info(json1);



//Elimina un registro  en posicion 4
jsonArray.splice(4, 1);
console.log('jsonArray: ', jsonArray);

//jsonArray.splice(4, 0, { id: 5, name: 'carlos', edad: 30 });  agregar de  nuevo un registro  con metodo areglo splice
//console.log('jsonArray: ', jsonArray);