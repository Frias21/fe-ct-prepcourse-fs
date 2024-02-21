function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length===0){
    return null;
  }
  //numeros.sort(function(a,b){return a-b}); // Ordena los números de menor a mayor.
  
  for(let i=1;i<=numeros.length-1;i++){
    for(let j=0;i<=numeros.length-2;j++){
      if(numeros[j]>numeros[j+1]){
        let temp=numeros[j];
        numeros[j]=numeros[j+1];
        numeros[j+1]=temp;
      }
    }
  }
  for(let i=0;i<=numeros.length-1;i++){
    if(numeros[i+1]!==numeros[i]+1){
      return numeros[i]+1;
    }
  }
  return null;
}
encontrarNumeroFaltante([1,2,4,5]);
module.exports = encontrarNumeroFaltante;