/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */




document.addEventListener("keydown", function(event) {
    var x = event.keyCode
    var y = String.fromCharCode(x)
    var output = document.getElementById("output")

    output.textContent = `You have pushed the ${y} key. It's key code is ${x}`
})



// document.addEventListener("keydown", function(event) {
//     console.log(event.which);
//          if (event.which === 66 ) {        
//     `You have pushed the ${event.which} key. It's key code is ${event.which}`
// }})

// document.addEventListener("keydown", function(event) {
//     console.log(event.which);

// }