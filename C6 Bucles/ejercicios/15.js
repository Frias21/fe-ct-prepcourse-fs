function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  var semana=["No es un dia de la semana","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  if(numero-Math.floor(numero)===0&&numero>=1&&numero<=7){
    return semana[numero];
  }else{return "No es un dia de la semana";}
}
obtenerDiaSemana(6);
module.exports = obtenerDiaSemana;