function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  if(array.length>0){
    return array[array.length-1];
  }else{return null;}
}
devolverUltimoElemento(["sape","gohan","goku"]);
module.exports = devolverUltimoElemento;
