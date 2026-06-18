// ===============================
// script.js
// ===============================


// ===============================
// WHAT IS DOM
// ===============================

// DOM (Document Object Model) represents the HTML document
// as a tree of objects. JavaScript can access and manipulate
// these objects to change content, style, and structure.


// ===============================
// SELECTING ELEMENTS
// ===============================

// 1. Selecting element by ID
let title = document.getElementById("title");
console.log(title);


// 2. Selecting elements by Class Name
let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);


// 3. Selecting elements by Tag Name
let ptag = document.getElementsByTagName("p");
console.log(ptag);


// 4. querySelector (selects first matching element)
let firstPara = document.querySelector(".text");
console.log(firstPara);


// 5. querySelectorAll (selects all matching elements)
let allPara = document.querySelectorAll(".text");
console.log(allPara);


// ===============================
// CHANGING CONTENT
// ===============================

// innerHTML → change HTML content
document.getElementById("demo").innerHTML = "<b>Hello from JavaScript</b>";


// textContent → change only text
title.textContent = "DOM Manipulation in JavaScript";


// ===============================
// CHANGING STYLE
// ===============================

title.style.color = "blue";
title.style.fontSize = "30px";


// ===============================
// CREATING NEW ELEMENT
// ===============================

// create a paragraph
let newPara = document.createElement("p");

// add text to paragraph
newPara.textContent = "This paragraph is created using DOM.";

// add paragraph to body
document.body.appendChild(newPara);


// ===============================
// EVENT HANDLING
// ===============================

// button click event
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Button was clicked!");
});


// ===============================
// REMOVING ELEMENT
// ===============================

// Example: removing the first paragraph
// paragraphs[0].remove();


// ===============================
// SUMMARY
// ===============================

// Using DOM we can:
// 1. Access HTML elements
// 2. Change content
// 3. Modify styles
// 4. Create new elements
// 5. Remove elements
// 6. Handle user events