const loginForm = document.getElementById('login-div');
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const emailid = document.getElementById('email');
    const pass = document.getElementById('password');
    const users = JSON.parse(localStorage.getItem('users')) || [];
            if(users.find(u => u.email !== emailid)){
                alert('Email not registered!');
                return;
            }
            else{
                if(users.find(u => u.password !== pass)){
                    alert('Password incorrect. Please try again.')
                
                }
                else {
                    alert('Login Successful!');
                }  
            }
            
});
