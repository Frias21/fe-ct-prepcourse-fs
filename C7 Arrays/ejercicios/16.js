function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  resultado=[];
  for(i=0;i<=array.length-1;i++){
    resultado.push(array[i]*i);
  }
  return resultado;
}
multiplicarElementosPorIndice([4,8,6,5,0]);
module.exports = multiplicarElementosPorIndice;
