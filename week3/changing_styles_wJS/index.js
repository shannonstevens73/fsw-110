
//  h1 tag with for loop to create a list so I can change their styles
for (var i = 0; i < 10; i++) {
    var newH1 = document.createElement("h1")
    newH1.textContent = "Hello World"
    newH1.style.fontSize = "20px"
    newH1.style.fontWeight = "lighter"
    newH1.style.fontFamily = "sans-serif"
    newH1.style.color = "cornflowerblue"   
    newH1.classList.add("border")
    document.body.append(newH1)
}

// Array of names
const names = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
]

// Unordered List Element
var namesList = document.createElement("ul")
document.body.append(namesList)

// for loop to display names to change styles
for (var j = 0; j < names.length; j++) {
    var newName = document.createElement("li")
    newName.textContent = names[j]
    newName.style.fontSize = "20px"
    newName.style.fontWeight = "lighter"
    newName.style.fontFamily = "sans-serif"
    newName.style.color = "cornflowerblue"
    newName.classList.add("border")
    var namesList = document.querySelector('ul')
    namesList.append(newName)
}


