// //const but= document.querySelector('#red');
// function redcolor()
// {
//     const element=document.querySelector('#three');
//     element.className='red';
// }
// //but.onclick=redcolor
// //  but.onclick=document.querySelector('#three').classList.add('red')
// // but.addEventListener('click',redcolor)
// let color=['red','yellow','blue','orange']
// function colorise()
// {
//     const element=document.querySelectorAll('.num');
//     color.reverse()
//     console.log(color)
//     for(let i=0;i<element.length;i++)
//     {
//         element[i].id=color[i]
//     }
// }
// const but= document.querySelector('#but');
// addEventListener('click',colorise)

// setting a button 
// let div=document.getElementById("div-container")

// const btn= document.createElement("button")
// btn.textContent="Click Me"
// // div.appendChild(btn)
// div.prepend(btn)
// // div.removeChild(btn)
// Removing Everything

// div.removeChild(btn)

const btn=document.getElementById("btn");

// btn.onclick=function()
// {
//     // alert("Button was Clickes!");
//     // console.log("1st")
//  }
//  btn.addEventListener("mouseleave",function(){
//     this.style.backgroundColor="blue"
//  })

const form= document.getElementById("registrationForm")
    form.addEventListener("submit",function(ele){
        ele.preventDefault()
        const username=document.getElementById("UserName").values.trim()

        const email=document.getElementById("email").values.trim()
        console.log("USername:",username)
        console.log("Email:",email)
        // FORM VALIDATION: Checking the values of username and email or other fileds to validate the form 
        if(username==""|| email=="")
        {
            alert("PLease fill the required fileds ")
        }
        if(username.length<3)
        {
            alert("Username must be atleast 3 characters long")
            this.style.border="2px solid red "
        }


    })    

// Values Reading    

