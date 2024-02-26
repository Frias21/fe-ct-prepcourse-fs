function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let contador=0;
  for(let post of objetoUsuario.posts){
    if(post.hasOwnProperty('likes')&& typeof post.likes==='number'){
      contador+=post.likes;
    }
  }
  return contador;
}

module.exports = sumarLikesDeUsuario;
