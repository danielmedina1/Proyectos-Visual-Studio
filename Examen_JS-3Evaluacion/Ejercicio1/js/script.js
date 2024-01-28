
alert("ADIVINA EL NÚMERO.- La aplicación te pedirá dos valores, se generará un número aleatorio entre estos y un número de intentos para adivinar dicho número secreto. ¡SUERTE!")
// Pregunta el valor minimo del numero que se generara
var min = prompt("Introduce el valor minimo del rango de numeros");
// Pregunta el valor máximo del numero que se generara
var max = parseInt(prompt("Introduce el valor maximo del rango de numeros"));
// Pregunta el numero de intentos que se tendran para adivinar el numero
var intentos = parseInt(prompt("Introduce el numero de intentos"));
// Genera el número aleatorio. No se por que no funciona 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numeroAleatorio = random(min, max);


// Comienza el juego
alert("Adivina el número entre " + min + " y " + max + " en " + intentos + " intentos");
// El bucle for comparara los numero de diferentes maneras mostrando por pantalla diferentes resultados dependiendo del valor
for (let index = 1; index <= intentos; index++) {
    var num = prompt("Intento #"+index+": ¿Cual es tu número? - "+numeroAleatorio);
    if (num == numeroAleatorio) {
        alert("Felicidades adivinaste el número en "+index+" intentos");
        index = intentos;
    } else {
        if (index == intentos) {
            alert("Agotaste tus "+intentos+". El numero era "+numeroAleatorio);
        } else {
            
        if(num > numeroAleatorio){
            alert("El número es menor. Te quedan "+(intentos-index)+" intentos ");
        } 
        if(num < numeroAleatorio) {
            alert("El número es mayor. Te quedan "+(intentos-index)+" intentos ");
        }
        }
    }
    
}

