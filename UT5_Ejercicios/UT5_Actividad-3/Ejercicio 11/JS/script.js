
var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

var snumeros = prompt("Escribe el numero del DNI");
var letra = prompt("Escribe la letra");

const calculoLetra = (letras, snumeros, letra) => {
    snumeros = parseInt(snumeros);
    let cletra = 0;
    if (snumeros>0 && snumeros<=99999999) {
        cletra = snumeros%23;
        if(letra == letras[cletra]) {
            document.write("DNI correcto");
            console.log("DNI correcto");
        } else {
            document.write("DNI incorrecto");
            console.log("DNI incorrecto");
        }

    } else {
        alert("El numero proporcionado no es valido");
    }


}

calculoLetra(letras, snumeros, letra);