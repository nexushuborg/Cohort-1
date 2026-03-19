// let element=document.getElementsByClassName("mera class")
// console.log(element)
// console.log(element[0])
// //getElementByClassName 
// // return type html collection

let element=document.getElementsByClassName("mera-class")
for(let i=0; i<element.length; i++){
    console.log(element[i].innerText)
}

let q=document.querySelector(".mera-class")
console.log(q)