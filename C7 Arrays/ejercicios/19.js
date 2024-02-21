function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  mul=1;
  if(arguments.length<0){
    return 0;
  }else{
    for(i=0;i<=arguments.length-1;i++){
      mul*=arguments[i];
    }
    return mul;
  }
}
multiplicarArgumentos();
module.exports = multiplicarArgumentos;
