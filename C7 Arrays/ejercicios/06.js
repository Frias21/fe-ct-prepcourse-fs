function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  resultado=[];
  for(i=array.length-1;i>=0;i--){
    resultado.push(array[i]); //agrega los elementos invertidos
    //resultado+=array[i] los une en un solo string
  }
  return resultado;
}
invertirArray(["sape","lucas","saiyayin"]);
module.exports = invertirArray;
