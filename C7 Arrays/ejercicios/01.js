function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  if(array.length>0){
    return array[0];
  }else{return null;}
}
devolverPrimerElemento(["sape","gohan","goku"]);

module.exports = devolverPrimerElemento;
