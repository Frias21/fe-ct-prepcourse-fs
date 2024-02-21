function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray(["lucas"],"sape");
module.exports = agregarItemAlComienzoDelArray;
