function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  mesesBuscados=["Enero","Marzo","Noviembre"];
  mesesPedidos=[];
  for(i=0;i<=array.length-1;i++){
    if(mesesBuscados.includes(array[i])){
      mesesPedidos.push(array[i]);
    }
  }
  if(mesesPedidos.length===mesesBuscados.length){
    return mesesPedidos;
  }else{return "No se encontraron los meses pedidos";}
}
mesesDelAño(["Sape","Lucas","Verdad"]);
module.exports = mesesDelAño;
