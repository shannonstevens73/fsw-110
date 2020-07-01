
document.addEventListener("submit", function(e){
    e.preventDefault()       

    alert(input1.value + " " + input2.value + " " + input3.value)

    input1.value = ""
    input2.value = ""
    input3.value = ""
})


