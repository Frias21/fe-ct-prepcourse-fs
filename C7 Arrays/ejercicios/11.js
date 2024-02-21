function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  resultado=[];
  for(i=0;i<=array.length-1;i++){
    resultado.push(array[i]*2);
  }
  return resultado;
}
duplicarElementos([10,15,20]);
module.exports = duplicarElementos;
