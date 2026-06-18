// setting/adding elements to the DOM
// let div = document.getElementById("div-conatiner")

// const btn = document.createElement("button")
// btn.textContent="click me"
// div.appendChild(btn)
// div.prepend(btn)

// div.replaceChild(btn)

//Event handling
// const btn = document.getElementById("btn");

// // btn.onclick = function(){
// //     alert("hello world")
// // };

// // addEventListener with all elements
// btn.addEventListener("mouseenter",function(){
//     this.style.backgroundColor = "red"
// });

// btn.addEventListener("mouseenter",function(){
//     this.style.backgroundColor = "blue"
// });

// dispatchEvent.addEventListener("click",function(event){
//     console.log("div clicked")
// })

// FORM MANIPULATION/VALIDATION

console form = document.getElementById("registrationForm")

form.addEventListener("submit",function(ele){
    ele.preventDefault()

    //values reading
const username = document.getElementById("username").value
const email = documentgetElementByID("email").value

console.log("Username:",username)
console.log("Email:",email)

// Form Validation: Checking the values of username and email(any other fields) to validate in the form 
if(username == "" || email == ""){
    alert("Please fill in all fields")
}
// this refers to the current present element might  be a div or in an input field or any form element

if(username.length<3){
    alert("Username must be atlast 3 character long")
    this.style.border = "2px solid red"
}

})



