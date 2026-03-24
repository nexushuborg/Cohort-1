const loginform=document.getElementById('loginform')
const display=document.getElementById('incorrect')
loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
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
        display.innerHTML=`
        <div id="text">
                    <p>Invaid email or password</p>
                </div>
        `
        return;

     }
     if (userpassword === "") {
        alert("Please enter password");
        display.innerHTML=`
        <div id="text">
                    <p>Invaid email or password</p>
                </div>
                `
        return;
    }


    alert("Login successful!");

})

function toggleForm(){
            document.getElementById('signupform').classList.toggle('hidden')
            document.getElementById('loginform').classList.toggle('hidden')
            
        }




