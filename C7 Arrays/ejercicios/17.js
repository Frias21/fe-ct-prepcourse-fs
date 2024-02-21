function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma=0;
  for(i=0;i<=arrayOfNums.length-1;i++){
    suma+=arrayOfNums[i];
  }
  return suma;
}
agregarNumeros([1,2,3,4,5]);
module.exports = agregarNumeros;
