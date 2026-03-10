
//DOM-Document Object Model
//JS does not directly manipulates the html
//it uses DOM representation of HTML
//DOM representation is the tree like structure thatd created when the webpage loads a HTML page
//before attaching events js must find elements Two common methods for that is :
//1: getElementById(): Finds the element of html by its id
//2: querySelector(): works like css selector document.querySelector("button")

// what is Event?
// any action that happens in the webpage is called event

//Event handling?
//running the js code when event occurs 
//example <button id="btn">click</button>

//two ways to handle an event 
//1. inline:js code is directly written inside html
//2. addEventListener():js separately written



// <!-- how the browser works


// 1. you write html code 
// 2. browser fetches the html file
// 3. browser parses the html 
// 4.browser creates a tree of nodes in memory 
// 5. browser renders the page bases on the dom+css
// 6. javascript csn now access and modify the dom
// 7. any changes to the dom browser re renders the affected part -->

// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id="main1">DOM EXAMPLE</h1>
//     <div>
//         <img src="">
//     </div>
// </body>
// <script src="DOM.js">

// </script>
// </html> -->
// <!--
// document.getElementById('main1')
// let v=document.ElementById('main1')
// console.log(v.innertext)
// v.innertext=Hi this changes h1 to hi

// //getElementsById return element or undefined


// </head>
// -->



// let element=document.getElementsByClassName("mera class")
// console.log(element)
// console.log(element[0])
// //getElementByClassName 
// // return type html collection

// let element=document.getElementsByClassName("mera-class")
// for(let i=0; i<element.length; i++){
//     console.log(element[i].innerText)
// }

// let ele=document.querySelector("class1")
// console.log(ele)


// let ele = document.querySelector(".m-2")
// console.log(ele)

// let cont=document.getElementById('div content')
// cont.style.backgroundColor='yellow'
// cont.style.margin='20px'
// cont.style.padding='20px'
// cont.style.height='90px'
// cont.style.border='10px solid black'
// cont.style.display='flex'
// cont.style.justifyContent='center'
// cont.style.fontSize='24px'
// cont.style.borderRadius='50%'
