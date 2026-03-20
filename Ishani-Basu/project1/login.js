const loginForm = document.getElementById('login-div');
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const emailid = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === emailid);
            if(!user){
                alert('Email not registered!');
                return;
            }
            if(user.password !== pass){
                alert('Incorrect password.')
            }
            else{
                alert('Login successful!');
            }
            
});
