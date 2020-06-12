
// H1 Element
var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

// p Element
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

// Ordered List Element
var newOL = document.createElement("ol")
document.body.append(newOL)

// List Items
var newLi1 = document.createElement("li")
newLi1.textContent = "One list item"
var myList = document.querySelector('ol')
myList.append(newLi1)

var newLi2 = document.createElement("li")
newLi2.textContent = "Two list items"
var myList = document.querySelector('ol')
myList.append(newLi2)

var newLi3 = document.createElement("li")
newLi3.textContent = "Three list items"
var myList = document.querySelector('ol')
myList.append(newLi3)







