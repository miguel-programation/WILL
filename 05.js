/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, name) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  var nuevoArreglo = array.map((pro) => {
        console.log(pro.name);
        return pro;
  });
  

  
  /* for(i = 0; i < array.length; i++){
        if (array[i].name == name){
              return array[i];
        } 
  } */

}

var array = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
pluck(array,'name');


// No modifiques nada debajo de esta linea //

module.exports = pluck