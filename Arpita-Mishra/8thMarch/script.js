// const but = document.querySelector("#red")
// function redColor(){
//     const element = document.querySelector("#three") // this for getting the id three
//     element.className = "red" // here we are changing the properties to the red class
// }

// but.onclick = redColor

// but.addEventListener('click', redColor) // here it takes two argument

let colors = ['red', 'blue', 'yellow', 'purple']
function colorise(){
    const element = document.querySelectorAll('.num')
    colors.reverse()
    for(let i = 0; i < element.length; i++){
        element[i].id = colors[i]; // here we are changing the Color of the elements
    }
}

let but = document.querySelector('#but') // here we are selecting the id for the button
but.addEventListener('click', colorise) // here addEventListener takes two argument one is event second one is function



// EXTRAA -->
// document.body.childNodes

// classList ---- returns the classlist of the element
// classList.add("red") ---- using this we can add a new class to this class list ---- this can also be used to assign the css directly to the element

// or document.querySelector(#three).style.color = "blue" ---- from this also we can add color to the elements


// classList.add ---- we can use this for using multiple properties
// className = "" ---- here we can use single properties

// if we are not defining the class in the Html file but if we are using it then also it will reflect through js