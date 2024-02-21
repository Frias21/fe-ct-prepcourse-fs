function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  contador=0;
  mayor=array[0];
  for(i=1;i<=array.length-1;i++){
    if(array[i]>mayor){
      mayor=array[i];
      contador=i;
    }
  }
  return contador;
}
encontrarIndiceMayor([4,87,20,95]);
module.exports = encontrarIndiceMayor;
