/**
 * Condiciones:
 * Serie de condiciones para que algo suceda
 * En programacion para el manejo de estas condiciones tenemos
 *  ! El bloque if else
 * ? Bloque if pregunta por una condicion en caso de que esta
 * ? condicion sea verdadera ejecuta un bloque de codigo,
 * ? en de falso no ejecuta nada
 * ? else maneja la ejecucion de codigo en caso negativo
 * Lo que se coloca dentro del if, debe ser algo que genere
 * *Un valor True or false (tipo de dato boolean)
*/
/**Convertir de texto a numero
 * !Importante
 * Si se trata de convertir algo que no es un numero como resultado
 * obtendremos NaN (not a number)
*/

const birthyear = prompt("Ingresa tu fecha de nacimiento");
let birthyearplusten = Number(2026- birthyear);
console.log("La edad del usuario:\n" + birthyearplusten);

/**
 * todo: Operadores logicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o falso
 *== Simbolo de igualdad en programacion
 *  Mayor que >
 * 2>1 == Verdadero
 * 1>2 == Falso
 * 0>0 == Falso
 * Menor que <
 * 2<1 == Falso
 * 3<5 == verdadero
 * 2<2 == Falso
 * Igual que ==
 * 2== 2 == Verdadero
 * 3==1 == Falso
 * Mayor o igual >=
 * 2>=2 == Verdadero
 * 2>=1 == Verdadero
 * 2>=3 == Falso
 * Menor o igual que <=
 * 4<= 4 == Verdadero
 * 4<=5 == Verdadero
 * 7<=5 == Falso
 *  Diferente de !=
 * 5!=4 == Verdadero
 * 5!=5 == Falso
 * 99!=100 Verdadero
 *  Negacion (not) !
 * !verdadero == Falso
 * !falso == Verdadero
 * !(4 <=4) == Falso
 * AND && es un operador que devuelve
 * ?verdadero solo si ambos lados de la expresion son Verdadero
 * Si un lado es Falso todo es resultado se vuelve Falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * age >=6 && age <= 12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 * OR || Es un operador que devuelve
 * ? Falso si ambos lados de la expresion son Falso
 * ? Si un lado de la expresion es verdadero devuelve Verdadero
 * Verdadero|| Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 * age > 20 || age < 100
 * age 101 == Verdadero
 * age 18 == Verdadero
 */
/**
 * Dentro de los parentesis va la condicion que se va a evaluar
 * Dentro de las llaves va el codigo que se va a ejecutar en caso
 *  de que la condicion sea verdadero
 * ?else if
 * Nos permite evaluar mas de 1 condicion
 * Va asociado a un if
 */
if (birthyearplusten >= 18){
alert ("Bienvenido eres mayor de edad\n");
}else if(birthyearplusten>=6 && birthyearplusten <=12){
  alert("\nFelicidades entraste a la primaria")
}else if(birthyearplusten>=1 && birthyearplusten <=5){
    alert("\nFelicidades sigues en el kinder")
}else{
    alert("Estas muy bebe o todavia no naces");
}