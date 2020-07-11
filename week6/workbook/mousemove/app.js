
// x and y coordinates

const box = document.querySelector(".red-box")

var respondHover = function(event){
    var x = event.clientX
    var y = event.clientY
    box.textContent = `X coords:  ${x}, Y coords: ${y}`
    
}
box.addEventListener("pointermove", respondHover)