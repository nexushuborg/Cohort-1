//FORM MANUPILATION/VALIDATION
const form=document.getElementById("registrationForm")
form.addEventListener("submit" , function(ele){
    
    ele.preventDefault()//prevents from losing data after refreshing


    //values reading 
    const username =document.getElementById("username").value.trim()

    const email=document.getElementById("email").value.trim()

    // console.log("Usernamae" , username)
    // console.log("Email" , email)

    //Form validation : checking the values of username and email to validate in the form
    if(username === "" || email === ""){
        alert("Please fill in all fields")
    }

    if(username.length<3){
        alert("username must be atleast 3 char long")
        this.style.border = "3px solid red"
    }
})

