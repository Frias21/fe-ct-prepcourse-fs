function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  aux=[];
  for(i=1;i<=array.length-1;i++){
    for(j=0;j<=(array.length-1-i);j++){
      if(array[j]>array[j+1]){
        aux=array[j];
        array[j]=array[j+1];
        array[j+1]=aux;
      }
    }
  }
  return array;
}
ordenarArray([10,15,48,14,25,7,6,4]);
module.exports = ordenarArray;
