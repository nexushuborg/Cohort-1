// const but = document.querySelector('#red')
// function redColor(){
//     const element = document.querySelector('#three') //this for getting the id three 
//     element.className = "red" // here we are changing the properties to the red class
// }

// but.onclick = redColor

// but.addEventListener('click',redColor) // here it takes two arguement 


let colors = ['red','blue','yellow','purple']
function colorise(){
    const element = document.querySelectorAll('.num') 
    colors.reverse()
    for(let i =0 ; i<element.length ; i++){
        element[i].id = colors[i]; // here we are changing the Color of the elements 
    }
}
let but = document.querySelector('#but') // here we are selecting the id for the button
but.addEventListener('click',colorise) // here addEventListener takes two arguement one is event second one is function