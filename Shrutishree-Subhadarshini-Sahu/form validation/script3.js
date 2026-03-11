//event handling
const btn = document.getElementById("btn")
// btn.onclick= function(){
//     alert("Button was clicked");
// }
// btn.addEventListener("click",function(){
//     console.log("2nd")
// });
// btn.addEventListener("mouseleave",function(){
//     this.style.backgroundColor="blue"
// });

// FORM MANIPULATION/VALIDATION
const form=document.getElementById("registrationForm")

form.addEventListener("submit", function(e){
    e.preventDefault() //page reload prevented
    //value reading
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    console.log("Username:",username)
    console.log("Email:",email)

//form validation
    if( username=== ""|| email === ""){
        alert("please fill all the fields")
    }
    if(username.length<3){
        alert("username should be atleast 3 characters long")
        this.style.border= "2px solid red"
    }
})


