function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   str1=str1.toLowerCase().replace(/ /g, '');
   str2=str2.toLowerCase().replace(/ /g, '');
   if(str1.length!==str2.length){
      return false;
   }
   let strOrdenada1=str1.split('').sort().join('');
   let strOrdenada2=str2.split('').sort().join('');
   return strOrdenada1===strOrdenada2;
}

module.exports = esAnagrama;
