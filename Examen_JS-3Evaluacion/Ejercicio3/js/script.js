document.addEventListener("DOMContentLoaded", function(){
    var cc1 = document.querySelectorAll("#camco");



    cc1.addEventListener('mouseover', cambioColor, false);

});

function cambioColor (event) {
    document.querySelectorAll("#camco").style.color = "#"+randomColor;
}
const randomColor = Math.floor(Math.random()*16777215).toString(16);