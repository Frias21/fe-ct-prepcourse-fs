function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for(i=0;i<=secuencia.length-1;i++){
    if(secuencia[i]%n==0&&secuencia[i]!==1){
      return secuencia[i];
    }
  }
  return undefined;
}
encontrarPrimerMultiploDeN(11, [3, 7, 10, 15, 20]);
module.exports = encontrarPrimerMultiploDeN;