function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
   if(!objetoUsuario.hasOwnProperty('amigos')||!Array.isArray(objetoUsuario.amigos)){
     objetoUsuario.amigos=[];
  }
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
  
}
let objetoUsuario={amigos:[]};
agregarAmigo(objetoUsuario,"bebon");
module.exports = agregarAmigo;
