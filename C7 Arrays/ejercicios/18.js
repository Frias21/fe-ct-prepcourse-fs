function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  promedio=0;
  for(i=0;i<=resultadosTest.length-1;i++){
    promedio+=resultadosTest[i];
  }
  return promedio/(resultadosTest.length);
}
promedioResultadosTest([15,14,13,19,20]);
module.exports = promedioResultadosTest;
