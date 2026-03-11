// setting/adding elements to the DOM 
// let div=document.getElementById('div-container')
// const btn=document.createElement("button")
// btn.textContent="Click me"    // add kr dega button ko 
// div.prepend(btn)
// div.removeChild(btn)    // remove kr dega button ko

// EVENT HANDHLING
// const btn=document.getElementById("btn");
// // onclick only works with button 
// btn.onclick=function()
// {
//     alert("hello world")
// };

// // addEventListener works with all elements
// btn.addEventListener("mouseover",function(){
//     console.log("2nd")
// });

// btn.addEventListener("mouseenter",function(){
//    this.style.backgroundColor="red"
// });

// btn.addEventListener("mouseleave",function(){
//    this.style.backgroundColor="blue"
// });



// FORM MANIPULATION/VALIDATION 
const form = document.getElementById("registrationForm")
form.addEventListener("submit",function(ele){
    ele.preventDefault()  // page reload prevented 
    // values reading 
    const username=document.getElementById("username").value.trim()  // trim means  leading aur tailing white spaces wagera ko hata deta hai 
    const email=document.getElementById("email").value
    console.log("username:", username)
    console.log("Email :",email)
// FORM VALIDATION  :- jo values dal rhe hai wo sahi aarha hai ya nai wo jan ne k liye ,,, checking the values of username and emails(any othe fields to validate in the forms)
    if(username==""|| email==""){
        alert("Please fill in all the feilds")
    } else if(!email.includes("@")){
        alert("please enter a valid email address")
    }

    if(username.length<3){
        alert("username must be atleast 3 charcaters long ")
        this.style.border="2px solid red "    // this  refers to the current scope current present element might be a div or an input feild or any form element 
    } 

    



})


