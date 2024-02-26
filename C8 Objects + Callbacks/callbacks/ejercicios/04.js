function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   //var suma = arreglo.reduce(function(total, num) {
   //   return total + num;
   //}, 0);
   suma=0;
   for(i=0; i<=arrayOfNumbers.length-1;i++){
      suma=suma+arrayOfNumbers[i];
   }
   cb(suma);
}
function miCallback(suma){
   console.log("La suma es: "+suma);
}
sumarArray([5,4,3,2,1],miCallback);
module.exports = sumarArray;
