const logIn = document.getElementById('SignUp');

logIn.addEventListener('submit', (e) => {
     
    //accessing the inputs
    const username = document.getElementById('username').value;
    const emails = document.getElementById('email').value;
    const passwords = document.getElementById('password').value;
    const conpwds = document.getElementById('confirmPwd').value

    //now checking the emails and passwords
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    
    let isEmailValid = emailRegex.test(emails);
    let isPasswordValid = passwordRegex.test(passwords);
    
    if(!isEmailValid){
        alert("Invalid Email address");
        e.preventDefault();
        return;
    }

    if(!isPasswordValid){
        alert("Invalid password: Must be at least 6 characters and contain both letters and numbers.");
        e.preventDefault();
        return;
    }

    if(passwords!=conpwds){
        alert("passwords not valid");
        e.preventDefault();
        return;
    }

} )