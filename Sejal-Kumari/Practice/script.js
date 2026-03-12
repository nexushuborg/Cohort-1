// const element=document.getElementsByClassName("num")
// console.log(element)

// let colors=['green','blue','yellow','red']
// let i=3
// for(e of element){
//     e.style.color=colors[i];
//     i--
// }

// form validation
const form = document.getElementById("registrationForm")
form.addEventListener("submit",function(ele){
    ele.preventDefault()//page reload prevented
})
const username=document.getElementById("username").value
const email=document.getElementById("email").value
console.log("Username:" , username)
console.log("Email:" , email)

const para = document.getElementById("para")
para.classList.add("para")// Adds a class name to that element

//$ sign meaning: Variables value accessing
let docs= "guyss"
console.log("hii ", $(docs))

