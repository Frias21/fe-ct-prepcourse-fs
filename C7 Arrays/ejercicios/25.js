function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  contador=0;
  for(i=0;i<=numeros.length-1;i++){
    if(numeros[i]%2!==0){
      continue;
    }
    contador++;
  }
  return contador;
}
contarParesConContinue([50,45,48,42,46,43]);
module.exports = contarParesConContinue;
