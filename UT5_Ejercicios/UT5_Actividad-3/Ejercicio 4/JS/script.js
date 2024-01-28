 //Primero creamos la variable donde se guardaran los numeros
 let resultado=0;
 /**
  * 
  * @param {*} resultado = Parametro que se pide por teclado,
  */
 const sumaResultado = resultado => {
    /**
     * Despues creon el bucle do while que solo se detendra si se pulsa el boton de cancelar
     */
    do{
        //Pedimos los valores gracias a un prompt
        let cadena=prompt("Introduce un numero");
        //Convierto la variable cadena en una de tipo Int o numerica
        cadena=parseInt(cadena);
        /**
         * Creo un if que identifica si es un numero o no, si lo es se 
         * suma al resultado, si no lo es muestra una alerta
         * */ 
        if(cadena<=0 || cadena>=0){
            resultado=resultado+cadena;
        }else{
            alert("Lo que has introducido no es un numero");
        }
        

    }while(confirm("Deseas continuar"));
    //Mostramos el resultado por pantalla
    alert(resultado);
 }
  /**
  * Para que la funcion haga efecto, hace falta llamarla de esta manera
  */
 sumaResultado(resultado);
 