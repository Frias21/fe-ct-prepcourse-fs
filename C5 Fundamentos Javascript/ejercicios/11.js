function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var hoy=new Date();
  var cumpleaños=new Date(fechaNacimiento);
  var edad=hoy.getFullYear()-cumpleaños.getFullYear();
  if (edad>=18){
    return true;
  }else{return false;}
}
var edad=esMayorDeEdad("2005/08/11");

module.exports = esMayorDeEdad;