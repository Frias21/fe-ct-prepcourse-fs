function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  suma=num;
  resultado=[]
  for(i=0;i<=9;i++){
    suma+=2;
    resultado.push(suma);
    if(suma===i){
      return "Se interrumpió la ejecución";
    }
  }
  return resultado;
}
breakStatement(51);
module.exports = breakStatement;
