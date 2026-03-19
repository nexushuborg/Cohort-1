//getElementById
//return undefined 
//let ele=document.getElementById("pehla")
//console.log(ele)
//ele.innerText="hi"

//getElementsByClassName
//return htmlcollection[] or array
//let elemnt=document.getElementsByClassName("pehla")
//console.log(element)
//console.log(element[0])
//console.log(typeof element)

//let element=document.getElementsByClassName("mera-class")
//for(let i=0;i<element.length;i++){
//    console.log(element[i].innerText);
//}    

//for(ele of element){
//    console.log(ele.innerText)
//}

//getElementsByTagName
//let tag=document.getElementsByTagName('hi')
//for(let i=0;i<tag.length;i++){
//   console.log(tag[i].innerText);
//}  

//querySelector
//let q=document.querySelectorAll('.pehla') //returns all matches
//console.log(q)
//for(let i=0;i<i.length;i++){
//    console.log(q[i].innerText);
//}  

//let p=document.querySelector('.pehla') //returns first match
//console.log(p)
//for(let i=0;i<i.length;i++){
//    console.log(p[i].innerText);
//}  

//const element=document.querySelector("div")
//console.log(element.textContent)
//console.log(element.innerText)

let cont= document.getElementById('div-container')

cont.style.backgroundColor='yellow'
cont.style.fontSize="24px"
cont.style.padding="20px"
cont.style.margin="50px"
cont.style.border="5px solid blue"
cont.style.borderRadius="100%"
cont.style.display="flex"
cont.style.justifyContent="center"
cont.style.alignItems="center"