function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(i=0;i<=array.length-1;i++){
    if(typeof array[i]==="string"&&array[i].length>5){
      return array[i];
    }
  }
}
obtenerPrimerStringLargo([
  'this',
  'is',
  'a',
  'test',
  'with',
  'a',
  'long',
  'string',
]);
module.exports = obtenerPrimerStringLargo;
