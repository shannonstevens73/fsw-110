
const add = document.getElementById("addButton")

 add.onclick = function (){
    var add1 = document.getElementById("n1").value
    var add2 = document.getElementById("n2").value
    var add3 = document.getElementById("n3").value
    
    var result = document.getElementById("result")
    result.textContent = (Number(add1 * 5) + Number(add2 * 7) + Number(add3 * 11))
    
}