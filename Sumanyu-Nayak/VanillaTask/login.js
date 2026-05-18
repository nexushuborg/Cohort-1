const form=document.getElementById('loginForm');
const errorMsg=document.getElementById('login-error-message');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const email=document.getElementById('loginEmail').value;
    const password=document.getElementById('loginPassword').value;
    const users=JSON.parse(localStorage.getItem('users')) || [];// Retrieve existing users from localStorage or initialize an empty array if none exist
    const validuser=users.find(user=>user.email===email && user.password===password);//users.email is email in array(in signup) and email is the input email.
    
    if(email==='' || password===''){
        errorMsg.textContent='Please fill in all fields';
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        errorMsg.textContent='Please enter a valid email address';
        return;
    }
    if(password.length<6){
        errorMsg.textContent='Password must be at least 6 characters long';
        return;
    }
    if(validuser){
        errorMsg.textContent='Login successful!';
        errorMsg.style.color = '#4ade80'; // Change error message color to green
        errorMsg.style.display='block';
    }
    else{
        errorMsg.style.color='red';
        errorMsg.textContent='Invalid Email or Password.'
        errorMsg.style.display='block';
    }
    form.reset();// Clear the form after successful submission
})
//Toggle Password Visibility
function togglePassword(){
    const passwordInput=document.getElementById('loginPassword');
    const toggleText=document.querySelector('.toggle');
    if(passwordInput.type==='password'){//.type property is used to get or set the type of an input element. In this case, it checks if the current type of the password input field is 'password', which means the characters are hidden.
        passwordInput.type='text';// If the condition is true, it changes the type to 'text', making the characters visible.
        toggleText.textContent='Hide';//updates the toggle text to 'Hide' to indicate that clicking it again will hide the password.
    }else{
        passwordInput.type='password';
        toggleText.textContent='Show';
    }
}