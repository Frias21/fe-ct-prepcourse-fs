function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  const usuario={
    nombre: nombre,
    email: email,
    password: password
  };
  return usuario;
}
nuevoUsuario("Fer","fer@sapee.com","gracias");
module.exports = nuevoUsuario;
