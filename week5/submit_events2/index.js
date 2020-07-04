
const form = document.myForm

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const checkedInputs = []
    
     for(let i = 0; i < form.food.length; i++){
         if(form.food[i].checked){
             checkedInputs.push(form.food[i].value)
         }
     }
    
     console.log(checkedInputs)

    alert(`
        First name: ${form.firstName.value}
        Last name: ${form.lastName.value}
        Age: ${form.age.value}
        Gender: ${form.gender.value}
        Location: ${myForm.city.value}
        Dietary restrictions: ${checkedInputs}`)


})