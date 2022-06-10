var bool = false;

if(bool) { //Si esta condicion se cumple
    console.log("Variable verdadera");
} else {
    console.log("Variable falsa");
}

//a === b; a !== b ; a < b; a > b; a <= b; a >= b

var n = 10;
if(n >= 15) { 
    // Si se cumple con la condicional
    console.log("Numero mayor o igual a 15");
} else {
    //Si NO se cumple con la condicional
    console.log("Numero menor a 15");
}

if(n >= 15) {
    console.log("Numero mayor o igual a 15");
} else if(n <= 5) {
    console.log("Numero menor o igual a 5");
} else {
    console.log("Numero es entre 5 y 15");
}

var estaLloviendo = false;

if(!estaLloviendo) { //! Significa NO -> estaLloviendo === false
    console.log("Vamos a pasear");
}

var num1 = 4;
var num2 = "4";
if(num1 !== num2) { //
    console.log("Los número son distintos");
}

var temperatura = 15;
if(temperatura >= 18) {
    if(!estaLloviendo) {
        console.log("¡Excelente día para caminar en el parque1!");
    }
}

if( temperatura >=18 && !estaLloviendo ) { //Para que entre en el if deben de cumplirse las dos condiciones -> AND
    console.log("¡Excelente día para caminar en el parque2!");
} else {
    console.log("Luego salimos");
}

if(temperatura >= 18 || !estaLloviendo) { //Para que entre en el if se puede cumplir una u otra condición -> OR
    console.log("Salgo de todas formas ;)");
}

/* CICLOS */
/*
i = 0  
0 < 3
HOLA
i = 1
1 < 3
HOLA
i = 2
2 < 3
HOLA
i = 3
3 < 3 NO

----
i = 1
1 < 3 
HOLA
i = 2
2 < 3
HOLA
i = 3
3 < 3
 */
for(var i = 1; i <= 3; i++) {
    console.log("HOLA "+i);
}

/*
x = 0
0 < 3
ADIOS
x = 1
1 < 3
ADIOS
x = 2
2 < 3
ADIOS
x = 3
3 < 3
*/
var x = 1;
while(x <= 3) {
    console.log("ADIOS");
    if(x === 1) {
        x += 2;
    } else {
        x++;
    }
}

