/**
 * Declaro las variables num1 (El primer numero de la operacion), num2 (El segundo numero de la operacion),
 * op (El tipo de operacion que se realizara), resultado (El resultado de la operacion)
 */
var num1="";
var num2="";
var op="";
var resultado;
/** 
 * En la funcion dentro del addEventListener, declaro las variables en las que se guardara si se presiona una tecla, 
 * y varios addEventListener que se activaran con un click y que pondran en marcha diferentes funciones
*/
document.addEventListener("DOMContentLoaded", function(){
    var tc1 = document.querySelector('.e1');
    var tc2 = document.querySelector('.e2');
    var tc3 = document.querySelector('.e3');
    var tc4 = document.querySelector('.e4');
    var tc5 = document.querySelector('.e5');
    var tc6 = document.querySelector('.e6');
    var tc7 = document.querySelector('.e7');
    var tc8 = document.querySelector('.e8');
    var tc9 = document.querySelector('.e9');
    var tc10 = document.querySelector('.e10');
    var tc11 = document.querySelector('.e11');
    var tc12 = document.querySelector('.e12');
    var tc13 = document.querySelector('.e13');
    var tc14 = document.querySelector('.e14');
    var tc15 = document.querySelector('.e15');
    var tc16 = document.querySelector('.e16');
    var tc17 = document.querySelector('.e17');
    tc1.addEventListener('mousedown', capturarC, false);
    tc2.addEventListener('mousedown', capturarBarra, false);
    tc3.addEventListener('mousedown', capturarMulti, false);
    tc4.addEventListener('mousedown', capturarResta, false);
    tc5.addEventListener('mousedown', capturar7, false);
    tc6.addEventListener('mousedown', capturar8, false);
    tc7.addEventListener('mousedown', capturar9, false);
    tc8.addEventListener('mousedown', capturarSuma, false);
    tc9.addEventListener('mousedown', capturar4, false);
    tc10.addEventListener('mousedown', capturar5, false);
    tc11.addEventListener('mousedown', capturar6, false);
    tc12.addEventListener('mousedown', capturarIgual, false);
    tc13.addEventListener('mousedown', capturar1, false);
    tc14.addEventListener('mousedown', capturar2, false);
    tc15.addEventListener('mousedown', capturar3, false);
    tc16.addEventListener('mousedown', capturar0, false);
    tc17.addEventListener('mousedown', capturarPunto, false);
});
/**
 * La funcion capturarC, reseteara toda la calculadora, haciendo que todas las variables que utiliza se vacien
 */
function capturarC(event){
    let n3 = "";
    num1="";
    num2="";
    op="";
    resultado = 0;
    document.getElementById("nombre").innerHTML = n3;
}
/**
 * Las cuatro siguientes funciones (capturarBarra, capturarMulti, capturarResta y capturarSuma) hacen casi lo mismo
 * establecera la variable op a un valor dependiendo de la funcion y lo añadira a la variable n3 que se mostrara en 
 * el elemento con la clase "nombre"
 */
function capturarBarra(event){
    let n3 = "/";
    op="/";
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturarMulti(event){
    let n3 = "*";
    op="*";
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturarResta(event){
    let n3 = "-";
    op="-";
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturarSuma(event){
    let n3 = "+";
    op="+";
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
/**
 * Las diez siguientes funciones (capturar1, capturar2, capturar3, capturar4, capturar5, 
 * capturar6, capturar7, capturar8, capturar9, capturar0 y capturarPunto) hacen casi lo mismo
 * añadira a la variable num1 el caracter dependiendo de la funcion si no se a pulsado antes una funcion que 
 * modifique la variable op, si se ha hecho se le añadira a la variable num2
 */
function capturar1(event){
    let n3 = "1";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"1";
    } else {
        num2=num2+"1";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar2(event){
    let n3 = "2";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"2";
    } else {
        num2=num2+"2";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar3(event){
    let n3 = "3";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"3";
    } else {
        num2=num2+"3";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar4(event){
    let n3 = "4";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"4";
    } else {
        num2=num2+"4";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar5(event){
    let n3 = "5";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"5";
    } else {
        num2=num2+"5";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar6(event){
    let n3 = "6";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"6";
    } else {
        num2=num2+"6";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar7(event){
    let n3 = "7";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"7";
    } else {
        num2=num2+"7";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar8(event){
    let n3 = "8";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"8";
    } else {
        num2=num2+"8";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar9(event){
    let n3 = "9";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"9";
    } else {
        num2=num2+"9";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
function capturar0(event){
    let n3 = "0";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+"0";
    } else {
        num2=num2+"0";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}

function capturarPunto(event){
    let n3 = ".";
    if (op!="+" && op!="-" && op!="*" && op!="/") {
        num1=num1+".";
    } else {
        num2=num2+".";
    }
    document.getElementById("nombre").innerHTML = document.getElementById("nombre").innerHTML+n3;
}
/**
 *La siguiente funcion convertira la variable num1, num2 y resultado en una de tipo int y dependiendo de que tecla
 que modifica el op se haya pulsado, realizara una operacion u otra
 */
function capturarIgual(event){
    resultado = parseFloat(resultado);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if ( op!="-" && op!="*" && op!="/") {
        resultado = num1 + num2;
    } else{
        if ( op!="*" && op!="/") {
            resultado = num1 - num2;
        } else {
            if (op!="/") {
                resultado = num1 * num2;
            } else {
                    resultado = num1 / num2;
                 
            }
        }    
    }
    resultado = resultado.toString();
    document.getElementById("nombre").innerHTML = resultado;
}