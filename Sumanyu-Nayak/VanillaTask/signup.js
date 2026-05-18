const form=document.getElementById('signupForm');
const errorMsg=document.getElementById('error-message');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    const usernameError=document.getElementById('username-error').value;
    const emailError=document.getElementById('email-error').value;
    const passwordError=document.getElementById('password-error').value;
    
    const users=JSON.parse(localStorage.getItem('users')) || [];// Retrieve existing users from localStorage or initialize an empty array if none exist
    if(users.find(user=>user.email===email)){
        errorMsg.textContent='Email is already registered';
        return;
    }
    if(users.find(user=>user.username===username)){
        errorMsg.textContent='Username is already taken';
        return;
    }
    if(password!==confirmPassword){
        errorMsg.textContent='Passwords do not match';
        return;
    }
    errorMsg.textContent='Account created successfully!';
    errorMsg.style.color = '#4ade80'; // Change error message color to green
    form.reset();// Clear the form after successful submission
    
    users.push({username,email,password});// Add new user to the users array
    localStorage.setItem('users', JSON.stringify(users));// Save updated users array to localStorage
})
//Toggle Password Visibility
function togglePassword(){
    const passwordInput=document.getElementById('password');
    const toggleText=document.querySelector('.toggle');
    if(passwordInput.type==='password'){//.type property is used to get or set the type of an input element. In this case, it checks if the current type of the password input field is 'password', which means the characters are hidden.
        passwordInput.type='text';// If the condition is true, it changes the type to 'text', making the characters visible.
        toggleText.textContent='Hide';//updates the toggle text to 'Hide' to indicate that clicking it again will hide the password.
    }else{
        passwordInput.type='password';
        toggleText.textContent='Show';
    }
}
//Password Strength Indicator
const passwordInput=document.getElementById('password');
const strengthBar=document.getElementById('strengthBar');
const strengthText=document.getElementById('strengthText');
passwordInput.addEventListener('input', function(){
    const password=passwordInput.value;
    let strength=0;
    if(password.length>=6) strength++;
    if(password.match(/[A-Z]/)) strength++;// match() method is used to search a string for a match against a regular expression.
    if(password.match(/[a-z]/)) strength++;
    if(password.match(/[0-9]/)) strength++;
    if(password.match(/[@$!%*?&]/)) strength++;

    
    switch(strength){
        case 0:
            strengthBar.style.width = '0%';// Sets the width of the strength bar to 0%, indicating no strength.
            strengthText.textContent = '';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.background="#ef4444"
            strengthText.textContent = 'Very Weak';
            strengthText.style.color="#ef4444"
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.background="#f97316"
            strengthText.textContent = 'Weak';
            strengthText.style.color="#f97316"
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.background="#eab308"
            strengthText.textContent = 'Medium';
            strengthText.style.color="#eab308"
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.background="#22c55e"
            strengthText.textContent = 'Strong';
            strengthText.style.color="#22c55e"
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.background="#17a917"
            strengthText.textContent = 'Very Strong';
            strengthText.style.color="#17a917"
            break;
    }
});