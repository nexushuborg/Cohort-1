//const div=document.getElementById("div-container")
//function redColor(){
// const element=document.querySelector("#three")//this for getting the id three
// element.className = "red" //here we are changing the properties to the red class
//}

//but.onclick = redColor

//but.addEventListener('click',redColor))//here it takes two argument
let div=document.getElementById("div-container")

const btn = document.createElement("button")
btn.textContent="click me"
div.prepend(btn)

