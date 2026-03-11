// let ele = document.getElementById('pehla'); //to select an element by its id
// console.log(ele);

// ele.innerText="Hamlon"  //to change the text of the element

// let ele2 = document.getElementsByClassName('first'); //to select elements by their class name, it returns an array like object

// for(let i=0; i<ele2.length; i++){   //ele2 is an array like object
//     console.log(ele2[i].innerText);
// }

// for(ele of ele2){
//   console.log(ele.innerText);
// }

// let tag = document.getElementsByTagName('h1'); //to select elements by their tag name, it returns an array like object

// for(let i=0;i<tag.length;i++){  
//   console.log(tag[i].innerText)
// }



// //querySelector
// let q=document.querySelectorAll("h1") //querySelectorAll is used to select elements by their tag name, class name, id or any other selector, it returns a node list which is an array like object
// console.log(q)
// // for(let i=0;i<q.length;i++){
// //   console.log(q[i].innerText)
// // }

// for(ele of q){
//   console.log(ele.innerText)
// }

// //comparision of getElementById, getElementsByClassName, getElementsByTagName and querySelectorAll:
// // getElementById: it is used to select an element by its id, it returns a single element
// // getElementsByClassName: it is used to select elements by their class name, it returns an array like object
// // getElementsByTagName: it is used to select elements by their tag name, it returns an array like object
// // querySelectorAll: it is used to select elements by their tag name, class name, id or any other selector, it returns a node list which is an array like object


// const element = document.querySelector("div")
// console.log(element.textContent)
// console.log(element.innerText)

let c=document.getElementById("container")

c.style.backgroundColor="lightblue"//to change the background color of the element
c.style.padding="20px"//to change the padding of the element, it can take values like px, em, rem, %, etc.
c.style.fontSize="24px"//to change the font size of the element, it can take values like px, em, rem, %, etc.
c.style.fontFamily="Arial, sans-serif"//to change the font family of the element, it can take values like Arial, sans-serif, etc.
c.style.border="2px solid blue"//to change the border of the element, it can take values like 2px solid blue, etc.
c.style.margin="20px"//to change the margin of the element, it can take values like px, em, rem, %, etc.
c.style.borderRadius="100px"//to change the border radius of the element, it can take values like px, em, rem, %, etc.
c.style.textAlign="center" //to change the text alignment of the element, it can take values like left, right, center, justify, etc.
c.style.display="flex"  //it is used to make the container a flex container, it allows us to align the items in the container in a flexible way
c.style.justifyContent="center"//it is used to align the items in the container horizontally, it can take values like flex-start, flex-end, center, space-between, space-around, space-evenly
c.style.alignItems="center"//it is used to align the items in the container vertically, it can take values like flex-start, flex-end, center, stretch, baseline
