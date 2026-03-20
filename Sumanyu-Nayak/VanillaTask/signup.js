const form=document.getElementById('signupForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;

    if(username==='' || email==='' || password==='' || confirmPassword===''){
        alert('Please fill in all fields');
        return;
    }
    if(password.length<6){
        alert('Password must be at least 6 characters long');
        return;
    }
    if(password!==confirmPassword){
        alert('Passwords do not match');
        return;
    }
    form.reset();// Clear the form after successful submission
    alert('Account created successfully!');

})