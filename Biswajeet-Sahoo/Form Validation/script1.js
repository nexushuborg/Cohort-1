// let div=document.getElementById("div-container");
// const btn= document.createElement("button");
// btn.textContent="Click me";
// div.appendChild(btn);
const btn=document.getElementById("btn");
// btn.onclick=function(){
//      alert("Button clicked");//seen as pop-up
//                 //or
//      console.log("Button clickeddd");//seen in console
//  };
// btn.addEventListener("mouseover",function(){
//     console.log("Button clickeddd")
// })

// btn.addEventListener("mouseenter",function(){
//     this.style.backgroundColor="red";
// })
// btn.addEventListener("mouseleave",function(){
//     this.style.backgroundColor="blue";
// })
const form=document.getElementById("registration");
form.addEventListener("submit",function(ele){
    ele.preventDefault();
 })

 //values reading

const username=document.getElementById("username").value;
const email=document.getElementById("user-mail").value;
const password=document.getElementById("user-password").value;
const gender=document.querySelector('input[name="gender"]:checked').value;
console.log("Username:",username);
console.log("Email:",email);
console.log("Password:",password);
console.log("Gender:",gender);

//form validation
if(username===""){
    alert("Username is required");
}
if(email===""){
    alert("Email is required");
}
if(password===""){
    alert("Password is required");
}
if(!gender){
    alert("Please select a gender");
}

if(username.length<3){
    alert("Username must be at least 3 characters long");
    this.StylePropertyMap.border="2px solid red";
}
//"this" keyword refers to the current present element- might be div or an input field or any form element
