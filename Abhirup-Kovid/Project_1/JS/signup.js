const form=document.getElementById("form")
const displayArea=document.getElementById("displayArea")
const usernameError=document.getElementById("usernameError")
const emailError=document.getElementById("emailError")
const passwordError=document.getElementById("passwordError")
const confirmPasswordError=document.getElementById("confirm-passwordError")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const confirmPassword=document.getElementById("confirm-password").value
    if(username.trim()===""){
        usernameError.style.display="block"
        return;
    }
    else{
        usernameError.style.display="none"
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.trim()==="" || !emailRegex.test(email)){
        emailError.textContent = email.trim() === "" ? "Enter the email" : "Please enter a valid email address";
        emailError.style.display="block"
        return;
    }
    else{
        emailError.style.display="none"
    }
    if(password.trim()===""){
        passwordError.style.display="block"
        return;
    }
    else{
        passwordError.style.display="none"
    }
     if(confirmPassword!==password){
        confirmPasswordError.style.display="block"
        return;
    }
    else{
        confirmPasswordError.style.display="none"
    }
    displayArea.innerHTML=`
    <div class="card">
        <h3>Signup Successful</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    </div>
    `
})