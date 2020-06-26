// Add
const add = document.getElementById("addButton")

 add.onclick = function (){
    var add1 = document.getElementById("add1").value
    var add2 = document.getElementById("add2").value
    var addPar = document.getElementById("addResult")
    
    addPar.textContent = "Result: " + (Number(add1) + Number(add2))

}

// Subtract
const sub = document.getElementById("subButton")

 sub.onclick = function (){
    var sub1 = document.getElementById("sub1").value
    var sub2 = document.getElementById("sub2").value
    var subPar = document.getElementById("subResult")
    
    subPar.textContent = "Result: " + (Number(sub1) - Number(sub2))

}

// Multiply
const mul = document.getElementById("mulButton")

 mul.onclick = function (){
    var mul1 = document.getElementById("mul1").value
    var mul2 = document.getElementById("mul2").value
    var mulPar = document.getElementById("mulResult")
    
    mulPar.textContent = "Result: " + (Number(mul1) * Number(mul2))

}