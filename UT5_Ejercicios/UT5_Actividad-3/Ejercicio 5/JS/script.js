/**
* Creo dos variables, una que ira aumentando conforme se repita el bucle, 
* y otra que ira uniendo los resultados
*/
let num=0;
let resultado="";
/**
 * La siguiente funcion imprimira por pantalla los numeros del uno al treinta en forma de piramide, en la que cada escalon
 * este compuesta por tantos numero como valor numerico toque en ese escalon
 * @param {*} num = Parametro numerico con valor 0
 * @param {*} resultado = Parametro de string con valor ""
 */
const piramideNumeros = (num, resultado) =>{
    /**
    * Creo dos bucles, uno que se encargara de ir aumentando la variable num e imprimiendo el ressultado, y otra
    * que ira uniendo los resultados un determinado numero de veces
    */
    for(i=0; i<30; i++){
        num++;
        for(j=0; j<=i; j++){
            resultado=resultado+""+num;
        }
        document.write(resultado+"<br>");
        resultado="";
    }
}
/**
* Para que la funcion haga efecto, hace falta llamarla de esta manera
*/
piramideNumeros(num, resultado);