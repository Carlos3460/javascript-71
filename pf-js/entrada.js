/** Prompt:
 * 1. Asignar su uso a una variable para luego poder usar el valor que
 *  ingreso el usuario
 *   1.2 Usar el valor inmediatamente
 *  ! Importante
 * 1. No se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el codigo, esto quiere decir que el codigo que este debajo
 *  de donde escribimos el uso de prompt no se va a ejecutar, hasta que
 *  el usuario ingresa algo
 * 3. No se puede personalizar
 * 4. Todo lo que ingresa en un prompt siempre es un String
 * 
 * Nota:
 *  ? \n es un caracter que nos inserta un salto de linea
 */



/* 
const edad = prompt("Ingresa tu edad", 15); El valor 15 es para que agrege el valor en automatico
console.log(edad);
const nombre = prompt("Ingresa tu nombre");
console.log(nombre);
console.log("hola soy " + nombre + " mi edad es " + edad + " anos");
alert("hola soy " + nombre + " mi edad es " + edad + " anos");
*/

const Peliseri = prompt("Ingresa serie o peliculla favorita");
const Personaje = prompt("Ingresa personaje favorito de esa serie o pelicula");
const Descripcion = prompt("Ingresa la razon porque es el favorito");
console.log("Pelicula o serie favorita:\n" + Peliseri + "\nPersonaje favorito:\n" + Personaje + "\nEs el favorito por:\n" + Descripcion);

