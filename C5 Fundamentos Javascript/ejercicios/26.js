function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  if(typeof(str)=="string"){
    return str+"!";
  }
}
agregarSimboloExclamacion("hello world");
module.exports = agregarSimboloExclamacion;
