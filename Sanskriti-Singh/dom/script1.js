//get elementByid
//return element or defined
// let ele= document.getElementById(main1);
// ele.innerText="hi";

//get element by class name
// let element=document.getElementsByClassName("main")
// console.log(element);
// console.log(element[0])

let element=document.getElementsByClassName("main")
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
let q=document.querySelectorAll(".main")//without all it access the first
// console.log(q)

//Dom properties
//innerText
// let str="my first code"
// console.log(q.innerText)
// q.innerText=str
// console.log(q.innerText)
let cont=document.getElementById('div-container')
cont.style.background='yellow'
cont.style.fontsize='24px'
cont.style.padding='20px'
cont.style.margin='50px'
cont.style.border='12px solid blue'
cont.style.display="flex"
cont.style.justifyContent="centre"
cont.style.alignment="centre"