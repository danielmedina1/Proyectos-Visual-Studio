 //Primero creamos la variable en la que se almacenaran las cadenas 
 let resultado="";
 /**
  * Creo la variable sumaValores, para que se cree una cadena de texto donde se junten todo lo pasado por pantalla
  * hasta que se cancele
  * @param {*} resultado = Parametro pasado por pantalla
  */
 const sumaValores = resultado =>{
    /**
     * Despues creon el bucle do while que solo se detendra si se pulsa el boton de cancelar
     */
    do{
        //Pedimos valores gracias a un prompt
        let cadena=prompt("Introduce un valor");
        /**
         * Creo un if que compara resultado con una cadena vacia para que 
         * la primera vez que se unan las cadenas no salga un guion 
         * */ 
        if(resultado=="" ){
            resultado=resultado+cadena;
        }else{
            resultado=resultado+"-"+cadena;
        }
        

    }while(confirm("Deseas seguir"));
    //Muestro el resultado
    alert(resultado);
 }
  /**
  * Para que la funcion haga efecto, hace falta llamarla de esta manera
  */
 sumaValores(resultado);
 