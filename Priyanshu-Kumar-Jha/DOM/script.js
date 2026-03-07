// let ele =document.getElementById("pehla")
// console.log(ele)
// ele.innerText="hi"

// let element = document.getElementsByClassName("pehla");
// console.log(element);
// console.log(element[0]);
// console.log(typeof element);

// let element1 = document.getElementsByClassName("pehla");
// for(let i = 0;i<element1.length;i++){
//     console.log(element1[i].innerText);
// }
// for(ele of element1){
//     console.log(ele.innerText)
// }

// let tag = document.getElementsByTagName('h1')
// for(let i = 0;i<tag.length;i++){
//     console.log(tag[i].innerText);
// }
// console.log(tag);


//querySelector
// let q = document.querySelectorAll("h1")
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }
// let q1 = document.querySelectorAll("h2")
// console.log(q1)
// for(ele of q1){
//     console.log(ele.innerText)
// }


const element = document.querySelector("div");
console.log(element.textContent)// sara text content la ke de dega.
console.log(element.innerText)// jo available text hai wahi la ke dega.