/**
 * En javascript hay 3 formas de declarar variables
* !Existe una forma que y no se recomienda su uso
* !var
*Al proceso de crear una variable y darle un valor se le llama asignacion
*A las variables que pueden ser asignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
* ? let nombrevariable = valor;
* 
* * el operador = se conoce como operador de asignacion
* Una vez creada una variable podemos usarla en otros lugares del codigo
* utilizando su nombre, las variables al ser utilizadas no van entre ""
* 
* Las variables que no pueden ser reasignadas (su valor no puede cambiar)
* se declara:
*  ! const nombreVariable = valor;
* 
* Nota:
* Palabras reservadas: Son palabras que utiliza el lenguaje de programacion
* y si intentamos usarlas en otros lados pueden generar errores
*/

let nombre = "carlos";
console.log(nombre) //tipo string

const birthYear = 1993;//tipo numero
console.log(birthYear);

/** Reasignando uan variable (Cambiando el valor que tiene)
* Cuando reasignamos una variable ( una variable ya creada)
* ! Ya no es necesario poner let
*/

nombre = "Esteban";
console.log(nombre);

/** Concatenar:
 *  Nos permite pegar el valor de una variable a un texto 
 */
console.log("hola soy " + nombre + " y naci en el year " + birthYear );


