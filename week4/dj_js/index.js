
const box = document.getElementById("square")



var respondClick = function(){
    box.style.backgroundColor = "blue";
}

box.addEventListener("mouseover", respondClick)  

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.which === 66 ) {
        box.style.backgroundColor = "blue"
  }})