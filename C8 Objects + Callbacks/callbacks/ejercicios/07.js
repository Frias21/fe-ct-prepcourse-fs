function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var resultado=[]
   for(i=0;i<=arrayOfStrings.length-1;i++){
      if(arrayOfStrings[i].startsWith("a")||arrayOfStrings[i].startsWith("A")){
         resultado.push(arrayOfStrings[i]);
      }
   }
   return resultado;
   // return arrayOfStrings.filter(function(elemento){
   //    return elemento.startsWith("a")||elemento.startsWith("A");
   // });
}
filter(["ana","divurcio","petronilo"]);
module.exports = filter;
