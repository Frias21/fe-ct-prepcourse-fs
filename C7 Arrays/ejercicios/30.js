function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let visto={};
  for(let i=0;i<=numeros.length-1;i++){
    if(visto[numeros[i]]!==undefined){
      return numeros[i];
    }else{visto[numeros[i]]=true;}
  }
  return null;
}
encontrarElementoRepetido([1,2,4,4]);
module.exports = encontrarElementoRepetido;