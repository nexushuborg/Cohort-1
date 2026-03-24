const signupform=document.getElementById('signupform')

signupform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const username=document.getElementById('username').value
    const useremail=document.getElementById('useremail').value
    const password=document.getElementById('userpassword').value
    // const repassword=document.getElementById('confirmpassword').value
    const users=JSON.parse(localStorage.getItem('users'))

    if(users.find(u=>u.name===username)){
        alert('Username is already taken!')
        return
    }
    if(users.find(u=>u.email===useremail)){
        alert('Email is already taken!')
        return
    }
    if(length(password)){
        alert('Password should be greater than 6 characters')
    }
    users.push({name:username,email:useremail,pass:password})

    localStorage.setItem('users',JSON.stringify('users'))
    alert("Signup successful! Now please login")
})
function toggleForm(){
            document.getElementById('signupform').classList.toggle('hidden')
            document.getElementById('loginform').classList.toggle('hidden')
        }



