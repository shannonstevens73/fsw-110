
// make the box disapear when the user clicks it
const redBox = document.querySelector(".red-box")
var respondClick = function(){
    redBox.style.backgroundColor = "white";    
}
redBox.addEventListener("click", respondClick)