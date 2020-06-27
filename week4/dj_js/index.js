// Blue when the mouse hovers over the square
const box = document.getElementById("square")
var respondHover = function(){
    box.style.backgroundColor = "blue";
}
box.addEventListener("mouseover", respondHover)

// Red when the mouse button is held down over the square
const redBox = document.getElementById("square")
var respondClick = function(){
    redBox.style.backgroundColor = "red";
}
redBox.addEventListener("mousedown", respondClick)

// Yellow when the mouse button is let go over the square
const yellowBox = document.getElementById("square")
var respondClick = function(){
    yellowBox.style.backgroundColor = "yellow";
}
yellowBox.addEventListener("mouseup", respondClick)

// Green when the mouse is double clicked in the square
const greenBox = document.getElementById("square")
var respondClickUp = function(){
    greenBox.style.backgroundColor = "green";
}
greenBox.addEventListener("dblclick", respondClickUp)

// Orange when the mouse scroll is used somewhere in the window (not just over the square)
const orangeBox = document.getElementById("square")
var respondMouseScroll = function(){
    orangeBox.style.backgroundColor = "orange";
}
window.addEventListener("mousewheel", respondMouseScroll)

// Keyboard color changes
document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.which === 66 ) {
        box.style.backgroundColor = "blue"
}   else if (event.which === 82 ) {
            box.style.backgroundColor = "red"
}   else if (event.which === 89 ) {
            box.style.backgroundColor = "yellow"
}   else if (event.which === 71 ) {
            box.style.backgroundColor = "green"
}   else if (event.which === 79 ) {
            box.style.backgroundColor = "orange"
}})