function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  a=str1.length;
  b=str2.length;
  if(a==b){
    return true;
  }else{return false;}
}
tienenMismaLongitud("sape","loco");
module.exports = tienenMismaLongitud;