

// Navbar
var navbar = document.createElement("nav")
document.body.append(navbar)

var navElement1 = document.createElement("a")
navElement1.textContent = "Home "
var nav1 = document.querySelector('nav')
nav1.append(navElement1)

var navElement2 = document.createElement("a")
navElement2.textContent = "Blog "
var nav2 = document.querySelector('nav')
nav2.append(navElement2)

var navElement3 = document.createElement("a")
navElement3.textContent = "About"
var nav3 = document.querySelector('nav')
nav3.append(navElement3)

//  H1 tag
var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my website"
document.body.append(newH1)

//  p tag
var newP = document.createElement("p")
newP.textContent = "If you love Books and Cats, this is the place for you! Favorite books listed below."
document.body.append(newP)

//  List
var newOL = document.createElement("ol")
document.body.append(newOL)

// List Items
var newLi1 = document.createElement("li")
newLi1.textContent = "The Holy Bible"
var myList = document.querySelector('ol')
myList.append(newLi1)

var newLi2 = document.createElement("li")
newLi2.textContent = "The Lord of the Rings"
var myList = document.querySelector('ol')
myList.append(newLi2)

var newLi3 = document.createElement("li")
newLi3.textContent = "Twilight"
var myList = document.querySelector('ol')
myList.append(newLi3)

//  Footer  
var footer = document.createElement("footer")
footer.textContent = "Shannon Stevens"
document.body.append(footer)