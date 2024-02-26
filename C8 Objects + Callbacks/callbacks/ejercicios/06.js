function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  //return array.map(cb);
  var resultado=[];
  array.forEach(function(elemento){
    resultado.push(cb(elemento))
  });
  return resultado;
}
function miCallback(elemento){
  return elemento*7;  
}
// function miCallback(elemento){
//   return elemento*3;
// }
map([1,2,3,4,5],miCallback);
module.exports = map;
