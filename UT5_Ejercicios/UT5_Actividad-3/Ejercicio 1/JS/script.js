//Primero utilizo un prompt para pedir la edad por pantalla
let edad=prompt("Introduce tu edad");
/**
 * Creo la funcion saberConducir para determinar si la persona puede o no conducir
 * @param {*} edad = Parametro introducido por pantalla
 * @returns 
 */
const saberConducir = edad =>{
    /**
         * Ahora creo un if para comparar la edad con el valor que quiero, si sale que es igual o mayor mostrara un alert
         * y si no lo es mostrara un alert diferente
         */
    if(edad>=18){
       return alert("Eres mayor de edad, puedes conducir");
    }else{
        return alert("No eres mayor de edad, no puedes conducir");
    }
}
 /**
  * Para que la funcion haga efecto, hace falta llamarla de esta manera
  */
saberConducir(edad);