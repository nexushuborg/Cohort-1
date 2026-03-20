const signUpForm = document.getElementById('signup-div');
signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userRegex = new RegExp('^[a-zA-Z]{3,15}$');
    const userCheck = userRegex.test(document.getElementById('username').value);
    let user;
    if (!userCheck){
        alert('Username must be 3-15 characters long.');
        return;
    }
    else{
        user = document.getElementById('username').value;
    }
    const emailRegex = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$')
    const emailval = document.getElementById('email').value;
    const email = emailRegex.test(emailval);
    if (!email){
        alert('Enter a valid E-Mail');
        return;
    }
    const passRegex = new RegExp('^[a-zA-Z0-9.@#$%^&*]{8,}$');
    const pass = passRegex.test(document.getElementById('password').value);
    const passRegex1 = new RegExp('[A-Z]+');
    const pass1 = passRegex1.test(document.getElementById('password').value);
    const passRegex2 = new RegExp('[.@#$%^&*]+');
    const pass2 = passRegex2.test(document.getElementById('password').value);
    const passRegex3 = new RegExp('[0-9]+');
    const pass3 = passRegex3.test(document.getElementById('password').value);

    if(!pass){
        alert('Password must be at least 8 characters long');
        return;
    }
    if(!pass1){
        alert('Password must contain at least one uppercase letter');
        return;
    }
    if(!pass2){
        alert('Password must contain at least one special character');
        return;
    }
    if(!pass3){
        alert('Password must contain at least one digit');
        return;
    }
    
    const confirm_pass = document.getElementById('confirm-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
            if(users.find(u => u.username === user)){
                alert('Username taken!');
                return;
            }
            if(document.getElementById('password').value !== confirm_pass){
                alert('Password incorrect. Please try again.')
                
            }
            else if(document.getElementById('password').value === confirm_pass){
                users.push({username: user, email: emailval, password: document.getElementById('password').value});
                localStorage.setItem('users', JSON.stringify(users));
                alert('Signup Successful!');
                toggleForm();
            }
            
            
});
function toggleForm(){
    document.getElementById('signup-div').classList.toggle('hidden');
    document.getElementById('login-div').classList.toggle('hidden');
}