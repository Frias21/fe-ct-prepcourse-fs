function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  tabla=[];
  for(i=0;i<=10;i++){
    tabla.push(6*i);
  }
  return tabla;
}
tablaDelSeis();
module.exports = tablaDelSeis;
