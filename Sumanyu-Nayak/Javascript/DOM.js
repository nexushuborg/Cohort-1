//getElementById
// return element or undefined
// let ele=document.getElementById()

//getElementsByClassName
//return HTMLCollection or array of elements or undefined

// let element=document.getElementsByClassName("mera-class")
// console.log(element);
// console.log(element[0]);

// let element=document.getElementsByClassName("mera-class")
// for(let i=0;i<element.length;i++){
//     console.log(element[i].innerText);   // fetch the inner text of the document
// }
// for(ele of element){
//     console.log(ele.innerText);
// }

//getElementsByTagName
//return HTMLCollection or array of elements or undefined

// let element=document.getElementsByTagName("h1")
// for(ele of element){
//     console.log(ele.innerText);
// }

//querySelector

//  let q=document.getElementsByClassName("mera-class")  // return first element that matches the specified selector or group of selectors
// // console.log(q);
// // let q1=document.querySelectorAll(".mera-class") // return a static NodeList of all elements that match the specified selector or group of selectors
// // console.log(q1);

// //DOM Properties
// //innerText
// let str="my first text"
// console.log(q.innerText); 
// q.innerText=str; //innerText is a property of an HTML element that represents the visible text content of that element. When you set the innerText property, it updates the text content of the element to the specified string. In this case, when you assign the value of str ("my first text") to q.innerText, it will change the text displayed within the element represented by q to "my first text".
// console.log(q.innerText);

// let cont=document.getElementById("container")
// cont.style.backgroundColor="yellow" //style is a property of an HTML element that allows you to access and modify the inline styles of that element. When you set the backgroundColor property of the style object, it changes the background color of the element to the specified value. In this case, when you assign "red" to cont.style.backgroundColor, it will change the background color of the element with the id "container" to red.
// cont.style.fontSize="20px"
// cont.style.padding="10px"
// cont.style.margin="50px"
// cont.style.border="2px solid black"
// cont.style.borderRadius="10px"
// cont.style.display="flex"
// cont.style.justifyContent="center" // justifyContent is a CSS property that is used to align and distribute space among items along the main axis of a flex container. When you set justifyContent to "center", it centers the items horizontally within the flex container. In this case, when you assign "center" to cont.style.justifyContent, it will center the content within the element with the id "container" horizontally.
// cont.style.alignItems="center" // alignItems is a CSS property that is used to align and distribute space among items along the cross axis of a flex container. When you set alignItems to "center", it centers the items vertically within the flex container. In this case, when you assign "center" to cont.style.alignItems, it will center the content within the element with the id "container" vertically.

// function redcolor(){
    //     const element=document.querySelector("#three");
    //     element.className="red";
    // }
    // but.onclick=redcolor;
    // let colors=["red","green","blue","orange"]
    // function colorise(){
    //     const element=document.querySelectorAll(".num");
    //     colors.reverse();
    //     for (let i=0;i<element.length;i++){
    //         element[i].id=colors[i];
    //     }
    // }
    // let but=document.querySelector("#but")
    // but.addEventListener("Click",colorise)

//setting a button
// let div=document.getElementById("div-container")
// const btn=document.createElement("button")
// btn.textContent="Click Me"
// div.appendChild(btn) // appendChild is a method that allows you to add a new child element to a parent element in the DOM. When you call div.appendChild(btn), it adds the button element (btn) as a child of the div element (container). This means that the button will be displayed within the container on the webpage.

//Event Handling
// const btn=document.getElementById("btn")

//onclick with button
// btn.onclick=function(){
//     alert("Button Clicked")
// }

//addEventListener with all elements
// btn.addEventListener("mouseover",function(){//mouse over 
//     console.log("Mouse Over");
//     alert("Mouse Over")
//     this.style.backgroundColor="red"
// })

//FORM MANIPULATION/VALIDATION
const form=document.getElementById("registrationForm")
form.addEventListener("submit",function(event){
    event.preventDefault() // page reload prevented

    //Values Reading
    const username=document.getElementById("username").value.trim()//trim removes the leading and trailing whitespaces
    const email=document.getElementById("email").value.trim()
    console.log("Username:", username)
    console.log("Email:", email)

    //Form Validation
    if(username==="" || email===""){
        alert("Please fill in all fields")
    }
    if(username.length<3){
        alert("Username must be at least 3 characters long")
        this.style.border="2px solid red"// this refers to the form element might be a div or input field or any form
        
    }
})

