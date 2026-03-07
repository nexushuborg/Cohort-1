//getElementById
//return element or undefined
// let ele = document.getElementById("main")
// ele.innerText = "hi"


// getElementsByClassName
// return HTMLCOLLECTION[] or array

// let element = document.getElementsByClassName("mera-class")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)

let element = document.getElementsByClassName("mera-class")
// for(let i=0;i<element.length; i++){
//     console.log(element[i].innerText)
// }

// for(ele of element){
//     console.log(ele.innerText)
// }

// getElementByTagName
// let tag = document.getElementsByTagName('h1')
// for(let i=0;i<tag.length;i++){
//     console.log(tag[i].innerText)
// }

// querySelector
let q = document.querySelector("mera-class")
// console.log(q)
// for(let i=0;i<q.clientHeight;i++){
//     console.log(q[i].innerText)
// }

// DOM Propertities
// innerText
// let str = "my first code"
// console.log(q.innerText)
// q.innerText = str
// console.log(q.innerText)
// console.log(q.innerHTML)

let cont = document.getElementById('div-container')

cont.style.backgroundColor = 'yellow'
cont.style.fontSize = '24px'
cont.style.padding = '20px'
cont.style.margin = '50px'
cont.style.border = '12px solid black'
cont.style.borderRadius = '100%'
cont.style.display = 'flex'
cont.style.justifyContent = 'center'
cont.style.alignItems = 'center'