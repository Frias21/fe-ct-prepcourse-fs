function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for(i=0;i<=array.length-1;i++){
    if(typeof array[i]==="string"){
      array[i]=array[i].toUpperCase();
    }
  }
  return array;
}
convertirStringAMayusculas(["lucas"]);
module.exports = convertirStringAMayusculas;
