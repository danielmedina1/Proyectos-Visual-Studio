/**
 * Introducimos el array valores con los datos que se nos indica
 */
var valores = [true, 5, false, "hola", "adios", 2];
/**
 * 
 * @param {*} valores = Array especificadoen el ejercicio
 */
const determinarCosas = valores =>{
    /**
     * Para la primera parte del ejercicio, empece con un bucle for para que recorra el array, despues con un if 
     * identifico si ese valor es de tipo string o no. Si es del tipo string, vuelvo a recorrer el array en busca de 
     * otro elemento del tipo string diferente del primero y los comparo sacando por pantalla cual es el mas largo.
     * Como en el ejercicio me han especificado que solo hay dos elementos string, despues de encontrarlos acabo el primer 
     * bucle igualando la variable i a la longitud del array para que se cumpla la condicion del for acabando asi el 
     * bucle.
     */
    document.write("----1. Determinar cual de las cadenas de texto es mas larga----<br>");
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i] == "string") {
            for (let j = 0; j < valores.length; j++) {
                if(typeof valores[j] == "string" && valores[i]!=valores[j]){
                    if (valores[i].length>valores[j].length) {
                        document.write(valores[i]+" > "+valores[j]+"<br>");
                    } else {
                        document.write(valores[i]+" < "+valores[j]+"<br>");
                    }
                    i = valores.length;
                }
            }
        }
    }
    document.write("----2. A ----<br>");
    

}
/**
* Para que la funcion haga efecto, hace falta llamarla de esta manera
*/
determinarCosas(valores);


