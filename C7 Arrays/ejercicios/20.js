function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  igual=array[0];
  for(i=1;i<=array.length-1;i++){
    if(array[i]!==igual){
      return false;
    }
  }
  return true;
}
todosIguales([14,14,14,15]);
module.exports = todosIguales;
