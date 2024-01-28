//Las siguientes funciones cambiaran el color y el tamaño de aquellos elementos asociados a ellas
function secimgpatr (elemento) {
    elemento.style.filter = "grayscale(100%)"
    elemento.style.width = "140px"
    elemento.style.height = "140px"
}
function rest (elemento) {
    elemento.style.filter = "grayscale(0%)"
    elemento.style.width = "120px"
    elemento.style.height= "120px"
}
//Las siguientes funciones cambiaran el color de aquellos elementos ligados a ella
function colon (elemento) {    
    elemento.style.color = "orange"

}
function colof (elemento) {
    elemento.style.color = "gray"
}
// Las siguientes funciones pondran un borde blanco o lo quitaran dependiendo de la posicion del raton
function borbla (elemento) {    
    elemento.style.border = "solid 2px white"

}
function bornor (elemento) {
    elemento.style.border = "0px"
}
//
function camimgpatr (elemento) {
    elemento.style.filter = "grayscale(100%)"
    elemento.style.width = "250px"
}
function camrest (elemento) {
    elemento.style.filter = "grayscale(100%)"
    elemento.style.width = "200px"
}
// Esta parte es la de la cuenta atras 
window.onload = cuentaAtras;

var dias = 94; 
var segundos = 59;
var minutos = 59;
var horas = 23;
/**
 * Funcion que ira restando a la cuenta atras hasta que esta llegue a cero
 */
function cuentaAtras() {
document.getElementById('crono').innerHTML = dias+" dias "+horas+" horas "+minutos+" minutos "+segundos+" segundos";
if(segundos == 0){
    minutos-=1;
    if (minutos == 0) {
        horas-=1;
        if(horas == 0) {
            dias-=1;
            if (dias == 0) {
                alert('Final');
            } else {
                minutos = 59;
                segundos = 59;
                horas = 23;
                setTimeout("cuentaAtras()",1000);
            }

        } else {
            minutos = 59;
            segundos = 59;
            setTimeout("cuentaAtras()",1000);
        }
    } else {
        segundos = 59;
        setTimeout("cuentaAtras()",1000);
    }
}else{
segundos-=1;
setTimeout("cuentaAtras()",1000);
}
}
cuentaAtras();