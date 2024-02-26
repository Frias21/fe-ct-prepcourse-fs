function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // if(objeto[propiedad]!==undefined&&objeto[propiedad]!==null){
  //   return true;
  // }else{return false;}
  return objeto.hasOwnProperty(propiedad);
}
tienePropiedad("lucas","lucas");
module.exports = tienePropiedad;
