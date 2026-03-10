//getElementById
//return element or undefined
// let ele=document.getElementBy('main1')
// ele.innerText="hi"


//getElementByclassName
//return type-HTML COLLECTION[in form of array]



// let element=document.getElementByclassName("mera-class")
// console.log(element)
// console.log(element[0])
//console.log(typeof element)


// let element=document.getElementsByClassName("mera-class")
// for(let i=0;i<element.length;i++)
// {
//     console.log(element[i].innerText)
// }


// for(ele of element)
// {
//     console.log(ele.innerText)
// }

//getElementByTagName
// let tag=document.getElementsByTagName("h1")
// for(let i=0;i<tag.length;i++){
//     console.log(tag[i].innerText)
// }

//querySelector
// let q=document.querySelector(".mera-class")
// console.log(q)
// for(let i=0;i<q.length;i++){
//     console.log(q[i].innerText)
// }

// //dom properties
// //inner text
// let str="my first push"
// console.log(q.innerText)
// q.innerText=str
// console.log(q.innerText)
let cont=document.getElementById('div-containor')
 
cont.style.background='yellow'
cont.style.forntSize='24px'
cont.style.padding='20px'
cont.style.margin='50px'
cont.style.border='12px solid blue'
cont.style.borderRadius="50%"
cont.style.display="flex"
cont.style.justifyContent="center"
cont.style.alignItems="center"



