const logIn = document.getElementById('SignUp');

logIn.addEventListener('submit', (e) => {
     
    //accessing the inputs
    const username = document.getElementById('username').value;
    const emails = document.getElementById('email').value;
    const passwords = document.getElementById('password').value;
    const conpwds = document.getElementById('confirmPwd').value

    //now checking the emails 
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = emails.match(regex);
    
    if(!isValid){
        alert("Invalid Email address");
        
    }
    if(passwords!=conpwds){
        alert("passwords not valid");
        return;
    }

} )