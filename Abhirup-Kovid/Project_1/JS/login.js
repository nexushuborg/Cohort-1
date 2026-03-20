const form=document.getElementById("form")
const displayArea=document.getElementById("displayArea")
const emailError=document.getElementById("emailError")
const passwordError=document.getElementById("passwordError")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
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
   
    displayArea.innerHTML=`
    <div class="card">
        <h3>Login Successful</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    </div>
    `
})