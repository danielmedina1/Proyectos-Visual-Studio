//Primero pido al usuario su nota con un prompt
let nota=prompt("Introduce tu nota");
/**
 * Creo la funcion calcularNota para que se muestre por pantallael valor correspondiente a la nota introducida
 * @param {*} nota = Parametro introducido por pantalla
 */
const calcularNota = nota => {
    /**
     * Despues utilizo varios if para comparar la nota y mostrar diferentes resultados segun el valor de nota
     */
    if(nota>=0 && nota<3){
        alert("Muy deficiente");
    }
    if(nota>=3 && nota<5){
        alert("Insuficiente");
    }
    if(nota>4 && nota<6){
        alert("Suficiente");
    }
    if(nota>5 && nota<7){
        alert("Bien");
    }
    if(nota>=7 && nota<9){
        alert("Notable");
    }
    if(nota>=9 && nota<=10){
        alert("Sobresaliente");
    }
    if(nota<0 || nota>10){
        alert("Nota Invalida");
    }
}
 /**
  * Para que la funcion haga efecto, hace falta llamarla de esta manera
  */
 calcularNota(nota);
