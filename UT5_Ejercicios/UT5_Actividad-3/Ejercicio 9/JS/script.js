/**
 * Primero creo la variable numero que guardara la base, y la variable potencia que guardara el exponente
 */
let numero = prompt("Introduce un numero");
let potencia = prompt("Introduce su potencia");
if (numero>=0 && potencia>=0) {
    /**
    * En el bucle for se multiplicara en la variable resultado la variable numero el total que 
    * la variable potencia exprese
    * @param {*} numero = Parametro pasado por pantalla que sera la base de la potencia
    * @param {*} potencia = Parametro pasado por pantalla que sera el exponente de la potencia
    */
    const potenciarNum = (numero, potencia) => {
        let resultado =1;
        for (let index = potencia; 1 <= index; index--) {
            resultado=resultado*numero;
        }
        document.write(resultado);
    }   
    potenciarNum(numero, potencia);
} else {
    alert("Los numeros pedidos deben de ser positivos");
}

/**
* Para que la funcion haga efecto, hace falta llamarla de esta manera
*/

