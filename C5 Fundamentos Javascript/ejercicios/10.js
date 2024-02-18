function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if(typeof(fecha)=="date"){
    if(isNaN(new Date(fecha))){
      return true;
    }else{return false;}
  }else{return false;}
}
esFechaValida(120224);
module.exports = esFechaValida;