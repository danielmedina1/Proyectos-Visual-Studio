/**
 * Eventos que sucederan en la pagina dependiendo de las acciones del usuario
 */
document.addEventListener("DOMContentLoaded", function(){
    var env = document.getElementById('envio');
    env.addEventListener('mousedown', señalEnvio, false);
});
/**
 * Esta funcion activa un elemento "alert" cuando se la llama
 * @param {*} event 
 */
function señalEnvio (event) {
    alert("Formulario Enviado");
}
