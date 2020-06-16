

//  h1 tag with for loop
for (var i = 0; i < 10; i++) {
    var newH1 = document.createElement("h1")
    newH1.textContent = "Hello World"
    newH1.style.color = "blue"
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

// for loop to display names
for (var j = 0; j < names.length; j++) {
    var newName = document.createElement("li")
    newName.textContent = names[j]
    var namesList = document.querySelector('ul')
    namesList.append(newName)
}

