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

let cont=document.getElementById("container")
cont.style.backgroundColor="yellow" //style is a property of an HTML element that allows you to access and modify the inline styles of that element. When you set the backgroundColor property of the style object, it changes the background color of the element to the specified value. In this case, when you assign "red" to cont.style.backgroundColor, it will change the background color of the element with the id "container" to red.
cont.style.fontSize="20px"
cont.style.padding="10px"
cont.style.margin="50px"
cont.style.border="2px solid black"
cont.style.borderRadius="10px"
cont.style.display="flex"
cont.style.justifyContent="center"
cont.style.alignItems="center"