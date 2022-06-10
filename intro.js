var num = 1; //Esta es una variable
var texto = 'Variable texto'; /* Esta es otra variable */
var bool = false; //false o true

console.log("Hola amigos!"); //Imprime en consola
console.log(texto);

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; //OPERADOR + sirve para sumar
console.log(suma);

var nombre = "Juana de Arco";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre); //OPERADOR + sirve para concatenar o juntar dos textoss

var combinaTexto = "ABC";
console.log(combinaTexto + num1);
console.log(combinaTexto + num1 + num2);
console.log(num1 + num2 + " " + combinaTexto);

var orden = 10 + 20 / 6; // * / % tienen prioridad
console.log(orden);

var orden2 = (10 + 20) / 6;
console.log(orden2);

var n = 13;
n += 4; //Estoy sumando a lo que antes tenía
n++; //sumamos 1
console.log(n);

var nombre_completo = "Juana";
nombre_completo += " De Arco";
console.log(nombre_completo);