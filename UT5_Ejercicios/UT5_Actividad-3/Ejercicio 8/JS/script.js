/**
 * Iniciamos con un prompt que pedira por pantalla el numero que se desea factorizar
 */
let num = prompt("Intrduzca un numero");
/**
 * En la funcion, lo primero que pasa es que inicializo la variable resultado a uno para que despues comience un 
 * bucle for que ira restando a index, que se ha igualado al numero pasado por pantalla, hasta que sea uno e ira 
 * multiplicandose para formar asi el factorial que se guarda en resultado
 * @param {*} num = Parametro que se ha introducido por pantalla
 */

const factorizarNum = num => {
    let resultado = 1;
    for (let index = num; index >= 1; index--) {
        resultado= resultado*index;
        
    }
    document.write("El factorial de "+num+" es igual a "+resultado);

}
/**
* Para que la funcion haga efecto, hace falta llamarla de esta manera
*/
factorizarNum(num);