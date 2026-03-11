//get elementByid
//return element or defined
// let ele= document.getElementById(main1);
// ele.innerText="hi";

//get element by class name
// let element=document.getElementsByClassName("main")
// console.log(element);
// console.log(element[0])

// let element=document.getElementsByClassName("main")
// for(let i=0;i<element.length;i++){
//     console.log(element[i].innerText)
// }
// for(ele of element){
//     console.log(ele.innerText)
// }

//getElementsByTagName
//return HTMLCOLLECTION[] or array
// let tag=document.getElementsByTagName('h1')
// for(let i=0;i<tag.length;i++){
//     console.log(tag[i].innerText)
// }

//querySelector - it does sabka kaam
// let q=document.querySelectorAll(".main")//without all it access the first
// console.log(q)

//Dom properties
//innerText
// let str="my first code"
// console.log(q.innerText)
// q.innerText=str
// console.log(q.innerText)
// let cont=document.getElementById('div-container')
// cont.style.background='yellow'
// cont.style.fontsize='24px'
// cont.style.padding='20px'
// cont.style.margin='50px'
// cont.style.border='12px solid blue'
// cont.style.display="flex"
// cont.style.justifyContent="centre"
// cont.style.alignment="centre"


//setting button
// let div= document.getElementById("div-container")

// const btn= document.createElement("button")
// btn.textContent="click me"
// div.append(btn)

//event handling
// const btn=document.getElementById("btn")
// btn.onclick=function(){
//  alert("hello world")
// }
// btn.addEventListener("mouseover",function(){
//     this.style.backgroundColor="red"
// })
// btn.addEventListener("mouseover",function(){
//     this.style.backgroundColor="blue"
// })

const form=document.getElementById("registrationform")

form.addEventListener("submit",function(ele){
    ele.preventDefault()//page reload prevented
    //value reading
    const username=document.getElementById("username").value.trim
const email =document.getElementById("email").value

console.log("username", username)
console.log("email",email)
//form validation: checking the values of username and email to validate int the form
if(username===""||email==""){
    alert("please fill in all the field")
}
//"this refers to the current present element =might be a div or an input field or any form element "
if(username.length<3){
    alert("usrname must be 3 character long")
    this.style.border="2px solid red"
}
})

