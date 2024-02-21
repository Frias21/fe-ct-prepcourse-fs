function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  resultado=[];
  for(i=0;i<=array.length-1;i++){
    if(array[i]%2===0){
      resultado.push(array[i]);
    }
  }
  return resultado;
}
filtrarNumerosPares([10,5,4,65,78,9]);
module.exports = filtrarNumerosPares;
