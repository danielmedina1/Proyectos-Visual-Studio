 /**
     * Creo dos variables, una que ira aumentando conforme se repita el bucle, 
     * y otra que ira uniendo los resultados
     */
 let num=0;
 let resultado="";
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