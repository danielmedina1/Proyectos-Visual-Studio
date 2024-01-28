/**
 * Con los siguientes prompt pido por pantalla el dia el mes y el ano
 */
let dia = prompt("Introduce el dia");
let mes = prompt("Introduce el mes");
let ano = prompt("Introduce el ano");
/**
 * Esta funcion comprueba si dia, mes y ano para ver si son valores correctos para despues imprimir la fecha
 * poniendo el mes a letra gracias a un array que los contiene todos
 * @param {*} dia = Parametro pedido por pantalla que es el dia de la fecha
 * @param {*} mes = Parametro pedido por pantalla que es el dia de la fecha
 * @param {*} ano = Parametro pedido por pantalla que es el ano de la fecha
 */
const comprobarFecha = (dia, mes, ano) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    if (dia>0 && mes<=12 && mes>=1 && ano>0) {
        if (mes == 1) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 2) {
            if (dia>=1 && dia<=29){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 3) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 4) {
            if (dia>=1 && dia<=30){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 5) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 6) {
            if (dia>=1 && dia<=30){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 7) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 8) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 9) {
            if (dia>=1 && dia<=30){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 10) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 11) {
            if (dia>=1 && dia<=30){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }
        if (mes == 12) {
            if (dia>=1 && dia<=31){
                document.write(dia+"/"+meses[mes-1]+"/"+ano);
            } else {
                document.write("Fecha Incorrecta");
            }
        }

    } else {
        document.write("Fecha Incorrecta");
    }
}
/**
* Para que la funcion haga efecto, hace falta llamarla de esta manera
*/
comprobarFecha(dia, mes, ano);