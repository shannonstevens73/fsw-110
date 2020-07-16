
// Form 
const form = document.myForm

form.addEventListener("submit", function(e){
    e.preventDefault()

    // Unordered List Element
    var todoList = document.createElement("ul")
    document.body.append(todoList)

    // Create items for list
    var newTitle = document.createElement("li")
    var deleteButton = document.createElement("button")
    var newDes = document.createElement("li")
    deleteButton.className = "deleteButton"
    newTitle.className = "newTitle"
    newDes.className = "newDes"

    // Config items for list
    newTitle.textContent = `Title: ${form.title.value}`
    newTitle.style.fontSize = "20px"    
    newTitle.style.marginTop = "8px"
    newTitle.style.fontWeight = "bold"
    newTitle.style.fontFamily = "sans-serif"
    newTitle.style.listStyleType = "none"       

    newDes.textContent = `Description: ${form.description.value}`
    newDes.style.fontSize = "20px"   
    newDes.style.marginTop = "3px"
    newDes.style.fontWeight = "lighter"
    newDes.style.fontFamily = "sans-serif"
    newDes.style.listStyleType = "none"

    deleteButton.textContent = "Delete"
    deleteButton.style.backgroundColor = "lightgray"
    deleteButton.style.marginTop = "3px"

    // Append items to list
    var todoList = document.querySelector('ul')
    todoList.appendChild(newTitle)
    todoList.appendChild(newDes)
    todoList.appendChild(deleteButton)        

    // Clear form
    form.title.value = ""
    form.description.value = ""  
    
    // Delete 
    deleteButton.addEventListener('click', function(e) {
        e.preventDefault()
            todoList.removeChild(newTitle)
            todoList.removeChild(newDes)
            todoList.removeChild(deleteButton)
    })

})  

     
      
