/**
 * Eventos que saltaran dependiendo de las acciones que el usuario tome en la pagina
 */
document.addEventListener("DOMContentLoaded", function(){
    var piedra = document.getElementById('piedra');
    piedra.addEventListener('mousedown', selectPiedra, false);
    var papel = document.getElementById('papel');
    papel.addEventListener('mousedown', selectPapel, false);
    var tijeras = document.getElementById('tijeras');
    tijeras.addEventListener('mousedown', selectTijeras, false);
});
/**
 * Esta funcion generara un numero aleatorio entre 0 y 2 y lo devolvera
 * @param {*} num = Una variable pasada a la funcion
 * @returns 
 */
function generarAleatorio (num) {
    num = parseInt(Math.floor(Math.random() * 3));
    return num;
}
/**
 * Funcion que al activarse generara un numero aleatorio y que al compararlo con otros parametros sacara un resultado
 * u otro
 * @param {*} event 
 */
function selectPiedra () {
    var eleccion;
    var resultado;
    var x = generarAleatorio();
    if (parseInt(x = 0)) {
        eleccion = "Piedra";
        resultado = "Empate";
    } 
    
    if (parseInt(x = 1)) {
        eleccion = "Papel";
        resultado = "Perdiste";
    } 
    if (parseInt(x = 2)){
        eleccion = "Tijeras";
        resultado = "Victoria";
    }
    alert("Tu eleccion: Piedra \nEleccion de la maquina: "+eleccion);
    alert(resultado);
}
/**
 * Funcion que al activarse generara un numero aleatorio y que al compararlo con otros parametros sacara un resultado
 * u otro
 * @param {*} event 
 */
function selectPapel () {
    var eleccion;
    var resultado;
    var x = generarAleatorio();
    if (x = 0) {
        eleccion = "Piedra";
        resultado = "Victoria";
    } 
    if (x = 1) {
        eleccion = "Papel";
        resultado = "Empate";
    } 
    if (x= 2) {
        eleccion = "Tijeras";
        resultado = "Perdiste";
    }
    alert("Tu eleccion: Papel \nEleccion de la maquina: "+eleccion);
    alert(resultado);
}
/**
 * Funcion que al activarse generara un numero aleatorio y que al compararlo con otros parametros sacara un resultado
 * u otro
 * @param {*} event 
 */
function selectTijeras () {
    var eleccion;
    var resultado;
    var x = generarAleatorio();
    if (x = 0) {
        eleccion = "Piedra";
        resultado = "perdiste";
    } 
    if (x = 1) {
        eleccion = "Papel";
        resultado = "Victoria";
    } 
    if (x = 2) {
        eleccion = "Tijeras";
        resultado = "Empate";
    }
    alert("Tu eleccion: Tijeras \nEleccion de la maquina: "+eleccion);
    alert(resultado);
}