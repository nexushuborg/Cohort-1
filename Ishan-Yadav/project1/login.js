const loginform=document.getElementById('loginform')
loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("Hello")
    const emailElemnt = document.getElementById("useremail")

    const useremail=document.getElementById('useremail').value
    const userpassword=document.getElementById('userpassword').value

    const validateEmail = (email) => {
        return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
    };

    if(!validateEmail(useremail)){
        alert("Please enter valid email")
        emailElemnt.value = ""
        return;

     }

})

function toggleForm(){
            document.getElementById('signupform').classList.toggle('hidden')
            document.getElementById('loginform').classList.toggle('hidden')
            
        }



