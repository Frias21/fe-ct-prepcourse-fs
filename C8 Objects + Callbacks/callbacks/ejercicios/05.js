function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  // array.forEach(function(elemento){ //método forEach() para iterar sobre cada elemento del arreglo.
  //   cb(elemento);
  // });
  for(i=0;i<=array.length-1;i++){
    cb(array[i]);
  }
}
function miCallback(array){
  console.log(array);
}
// function miCallback(elemento){
//   console.log("Elemento: "+elemento);
// }
forEach([1,2,3,4,5],miCallback);
module.exports = forEach;
