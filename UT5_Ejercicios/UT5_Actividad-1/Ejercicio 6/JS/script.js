/**
 * Creo un bucle for que ira imprimiendo los numeros del 1 al 500 y hago que varios if 
 * para que muestren el resultado que deseo dependiendo del numero
 */
for(i=1; i<=500; i++){
    parseInt(i);
    document.write(i);
    if(i%4==0){
        document.write("(Multiplo de 4)");
    }
    if(i%9==0){
        document.write("(Multiplo de 9)");
    }
    if(i%5==0){
        document.write("<br>"+"---------------------------------------");
    }
    document.write("<br>");
}

    