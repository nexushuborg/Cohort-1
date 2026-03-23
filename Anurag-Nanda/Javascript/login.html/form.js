function login()
{
    let username= document.getElementById("Username signup").value;
    let password=document.getElementById("Password signup").value;
    let email=document.getElementById("Email signup").value;


if(!email || !password || !username)
{
    error.innertext="Please fill all the fields";
}
else{
    error.innertext="";
    alert("Logged In Successfully! Taking you to the Dashboard ")

   }
}
function singup()
{
    let username= document.getElementById("Username signup").value;
    let password=document.getElementById("Password signup").value;
    let email=document.getElementById("Email signup").value;
    let confirmpassword=document.getElementById("ConfirmPassword signup").value;
    let error=document.getElementById("error")

}
if(!username ||!password||!confirmpassword)
{
    error.innertext="";
    alert("All fields are required! Please fill the required fields ")
}

if(password.length<8)
{
    error.innertext="";
    alert("Password must contain 8 characters")

}
function checkpasswordStrength(password)
{
    let score= 1;
    if(password.lenght>=8)
    {
        score=score+1;
    }
    if(/[A-Z;a-z]/.test(password))
    {
        score=score+1;
    }
    if(/[0-9!,#@*&^$]/.test(password))
    {
        score=score+1;
    }
    
}
if(password.length<4)
    {
        return("Weak Password")
        
    }
else if(score===2)
{
    return("FAIR")

}
else if(score===3)
{
    return("GOOD")
}
else if(score===4)
{
    return("STRONG")
}
