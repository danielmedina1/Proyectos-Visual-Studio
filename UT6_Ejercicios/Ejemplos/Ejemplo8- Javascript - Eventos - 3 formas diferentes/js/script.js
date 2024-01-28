/* MÉTODO 1 */

/*document.addEventListener("DOMContentLoaded", function() {
    
const link = document.getElementById("link");
link.onclick = function () {
    link.setAttribute("href","http://www.google.es");
}

});*/

/***************************************************/

/*MÉTODO 2 */

/*document.addEventListener("DOMContentLoaded", function() {
    
    const links = document.querySelectorAll("#link");
    links.forEach(link => {
        link.onclick = function () {
            link.setAttribute("href","http://www.google.es");
        };
    });

});*/

/************************************************** */
/*MÉTODO 3A*/


/*const link = document.getElementById("link");

function miFuncion(){
    link.setAttribute("href","http://www.google.es");
}

document.addEventListener("DOMContentLoaded", function() {  
    link.addEventListener('click',miFuncion);
});*/


/* MÉTODO 3B*/

/*document.addEventListener("DOMContentLoaded", function() {  
    const link = document.getElementById("link");
    link.addEventListener('click', function(event) {
        event.target.setAttribute("href", "http://www.google.es");
    });
});*/

/*MÉTODO 3C - Arrow function mode*/

document.addEventListener("DOMContentLoaded", () => {  
    const link = document.getElementById("link");
    link.addEventListener('click', (event) => {
        event.target.setAttribute("href", "http://www.google.es");
    });
});

