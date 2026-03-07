// let ele = document.getElementById("First");
// console.log(ele);

// ele.innerText = "Hello World, Welcome to the DOM Class!";

// ele.style.color = "blue";
// ele.style.fontSize = "40px";
// ele.style.textAlign = "center";

// let element = document.getElementsByClassName("Second");
// console.log(element);
// console.log(element[0]);
// console.log(typeof element);

// let elements = document.getElementsByClassName("Second");
// for (let i = 0; i < elements.length; i++)
// {
//     console.log(elements[i].innerText);
// }

// for(ele of elements)
// {
//     console.log(ele.innerText);
// }

let tag = document.getElementsByTagName("h1");
for (let i = 0; i < tag.length; i++)
{
    console.log(tag[i].innerText);
}