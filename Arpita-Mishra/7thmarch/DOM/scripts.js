// let ele=document.getElementById("first")     // one by id
// console.log(ele)
// ele.innerText="hi"    // iss h=se wo hello world  k jagah hii aajayega  first wale id me hellow world tha toh wo hii ho jayega 


// let element=document.getElementsByClassName("first")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)
// getElementsByClassName returns java collection type of array  collection but not exactly
// jiss jiss ka id first hoga wo sab ko le lega and 0 index  me de dega pehele element jo hu yaha hello word hai 


// let element=document.getElementsByClassName("first")    // many by class 
// for(let i=0;i<element.length;i++){
//     console.log(element[i].innerText);
// }
// for(ele of element){
//     console.log(ele.innerText)
// }

// let tag=document.getElementsByTagName('h1')   // many by tags
// for(let i=0;i<tag.length;i++){
//     console.log(tag[i].innerText);
// }

// let q=document.querySelector("h1")   // isme class id tag sab accept hoga   , yeh sirf pehele wale ko lega // first match
// console.log(q)


// let q=document.querySelectorAll("h1")   // isme class id tag sab accept hoga   , yeh sara ko  ko lega   /. all matches
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }
 // .innerText is one of the three properties of dom
// three properties of DOM ARE :
// 1ST  is .innerText    yeh jo text available hai wohi dega 
//2nd is .innerHTML
//3rd is textContent   yeh jitna v text h uss tag k andar sab de dega 

// const element=document.querySelector("div")
// console.log(element.textContent)
// console.log(element.innerText)


// css selector
let cont=document.getElementById('div-container')
cont.style.backgroundColor='yellow'
cont.style.border='5px solid blue'
cont.style.padding='25px'
cont.style.fontsize='24px'
cont.style.margin='50px'
cont.style.borderRadius='100%'
cont.style.display='flex'
cont.style.justifyContent='center'
cont.style.allignItems='center'



