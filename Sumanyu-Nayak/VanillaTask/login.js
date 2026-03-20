const form=document.getElementById('loginForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(email==='' || password===''){
        alert('Please fill in all fields');
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        alert('Please enter a valid email address');
        return;
    }
    if(password.length<6){
        alert('Password must be at least 6 characters long');
        return;
    }
    form.reset();// Clear the form after successful submission
    alert('Login successful!');
})