function myFunction() {
  alert("You pressed a key inside the input field");
}

document.addEventListener("DOMContentLoaded", function() {
let input = document.getElementById("myInput");
input.addEventListener("keypress", myFunction);
});









