
let users = JSON.parse(localStorage.getItem("users")) || [];


function signup(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("signupError");

    error.innerText = "";

    if(username.length < 3){
        error.innerText = "Username must be greater than 3 characters";
        return;
    }

    if(password.length < 6){
        error.innerText = "Password must be atleast 6 characters";
        return;
    }

    if(password !== confirm){
        error.innerText = "Passwords not matched";
        return;
    }

    let exist = users.find(u => u.email === email);
    if(exist){
        error.innerText = "User already exists";
        return;
    }

    users.push({username,email,password});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful");
    window.location.href = "login.html";
}
