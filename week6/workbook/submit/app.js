// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var form = document.getElementById("submit-me")
form.user_name.placeholder = "Name"
form.age.placeholder = "Age"

form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    alert(
            `
            Name: ${form.user_name.value}
            Age: ${form.age.value}`)

            form.user_name.value = ""
            form.age.value = ""



})
