function validateForm()
{
    let user =
    document.getElementById("username").value;

    let email =
    document.getElementById("email").value;

    let pass =
    document.getElementById("password").value;

    let confirm =
    document.getElementById("confirm").value;



    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



    if(user=="" || email=="" || pass=="" || confirm=="")
    {
        alert("Fill all fields");
        return;
    }


    // email check
    if(!emailPattern.test(email))
    {
        alert("Invalid email");
        return;
    }


    // strong password check
    if(!passPattern.test(pass))
    {
        alert(
        "Password must contain:\n" +
        "8 characters\n" +
        "1 capital letter\n" +
        "1 small letter\n" +
        "1 number\n" +
        "1 special character"
        );
        return;
    }


    if(pass != confirm)
    {
        alert("Passwords not match");
        return;
    }


    alert("Account Created!");
}