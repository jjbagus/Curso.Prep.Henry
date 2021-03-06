// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
for (var i=0; i < array.length; i++){
    array [i] = array [i]+ 1;
}
return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift (elemento);
return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = []
  var cadena = []
  var i=0
    while (i < palabras.length-1){
      string [0] = palabras [i];
      cadena = cadena + string + ' ';
      i++
    }
    if (i === palabras.length-1){
      string [0] = palabras [i];
      cadena = cadena + string;
    }
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0; i < array.length; i++) {
    if (array [i] === elemento) {
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumaparcial = []
  var sumatotal = [0]
  var i=0
    while (i < numeros.length){
      sumaparcial [0] = numeros [i];
      sumatotal [0] = sumatotal [0] + sumaparcial [0];
      i++
    }
  return sumatotal[0]
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumaparcial = [0]
  var sumatotal = [0]
  var i=0
    while (i < resultadosTest.length){
      sumaparcial [0] = resultadosTest [i];
      sumatotal [0] = sumatotal [0] + sumaparcial [0];
      i++
    }
  return sumatotal [0] /resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var masGrande = [0]
  for (i=0; i < numeros.length; i++) {
    if (numeros [i] > masGrande [0]) {
      masGrande [0] = numeros [i]
    }
  }
return masGrande [0]
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1){
   return 0;
  }
  var multiparcial = [1]
  var multitotal = [1]
  for(i=0; i<arguments.length; i++){
    multiparcial [0] = arguments [i];
    multitotal [0] = multitotal [0] * multiparcial [0];
  }
  return multitotal [0]
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
var n = 0;
  for (i = 0; i < arreglo.length; i++){
    if (arreglo [i] > 18){
      n = n+1;
    }
  }
return n
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
      return 'Es fin de semana';
      break;
    case 2:
      return 'Es dia Laboral';
      break;
    case 3:
      return 'Es dia Laboral';
      break;
    case 4:
      return "Es dia Laboral";
      break;
    case 5:
      return 'Es dia Laboral';
      break;
    case 6:
      return 'Es dia Laboral';
      break;
    case 7:
      return 'Es fin de semana';
      break;
    }
  }


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var espacio = [' ']
  var arreglo = [espacio [0] + n]
  if (arreglo [0][1] == 9){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for (i = 0; i < arreglo.length; i++){
    if (arreglo[i] === arreglo[i+1]) {    
    return true
    }
  }
  return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesespedidos = []
  for (i= 0; i < array.length; i++){
    if (array [i] === 'Enero'){
      mesespedidos.push('Enero');
    } 
    if (array [i] === 'Marzo'){
      mesespedidos.push('Marzo');
    }
    if (array [i] === 'Noviembre'){
      mesespedidos.push('Noviembre');
    }
  }
  if (mesespedidos.length === 3){
    return mesespedidos
  }
  return 'No se encontraron los meses pedidos';
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresacien = []
  for (i = 0; i < array.length; i++){
    if (array[i] > 100) {
      mayoresacien.push(array [i]);
    }
  }
  return mayoresacien
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

var parcial = [numero]
var sumaDos = []
var contador = [0]
var i=0
  while (i <= 9){
    parcial [0] = parcial [0] + 2;
    sumaDos.push(parcial [0]);
    contador [0] = contador [0]+1;
    if (sumaDos[sumaDos.length-1] === contador[0]){
    return 'Se interrumpió la ejecución';
    break;
    }
    i++;
  }
return sumaDos
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

var parcial = [numero]
var sumaDos = []
var contador = [0]
var i=0
  while (i <= 9){
    i++;
    contador [0] = contador [0]+1;
    if (contador[0] === 5)
    continue;
    parcial [0] = parcial [0] + 2;
    sumaDos.push(parcial [0]);
    }
return sumaDos
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
