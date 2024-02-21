function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  resultado=[];
  for(i=0;i<=array.length-1;i++){
    if(array[i]>10){
      resultado.push(array[i]);
    }
  }
  return resultado.length;
}
contarElementosMayoresA10([14,54,2,1,5,9]);
module.exports = contarElementosMayoresA10;
