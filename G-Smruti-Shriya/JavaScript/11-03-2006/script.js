let div = document.getElementById("div-container")


//Event Handling
const btn = document.createElement("button")
btn.textContent = "Youtube"
div.prepend(btn)

btn.onclick = function(){
    alert("You clicked the button This soesnt lead you to youtube it takes you to instagram :))))")

}

btn.addEventListener("mouseover" , function(){
    // alert("STop hovering and click it")
    this.style.backgroundColor = "rgb(210, 159, 220)"
})

const form = document.getElementById("registrationForm")

form.addEventListener("submit" , function(ele){
    ele.preventDefault()
    const username = document.getElementById("username").value
const email = document.getElementById("useremail").value

console.log("Username : ", username)
console.log("Email : ", email)

if (username === "" || email === ""){
    alert("Please fill the form")
}

if (username.length < 3){
    alert("Username longerrr")
    this.style.border = "2px solid red"
}
})



