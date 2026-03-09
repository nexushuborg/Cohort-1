// // let ele= document.getElementById("first")
// // console.log(ele)
// // ele.innerText = "hi"

// //element by class name
// //returns HTML.COLLECTION[]
// // let element=document.getElementsByClassName("first")
// // console.log(element)
// // console.log(element[0])
// // console.log(typeof element)

// // let element=document.getElementsByClassName("first")
// // for(let i=0;i<element.length;i++){
// //     console.log(element[i].innerText);
// // }
// // for (ele of element){
// //     console.log(ele.innerText)
// // }

// //get element by tag name
// // let tag=document.getElementsByTagName('h1')
// // for (let i=0;i<tag.length;i++){
// //     console.log(tag[i].innerText)
// // }
// // console.log(tag)

// //query selector 
// // let q=document.querySelectorAll("h1")
// // console.log(q.innerText)
// // for(let i=0;i<q.clientHeight;i++){
// //     console.log(q[i].innerText)
// // }
// // console.log(q)
// // for(ele of q){
// //     console.log(ele.innerText)
// // }

// const e = document.querySelector("div")
// console.log(e.textContent)
// console.log(e.innerText)
let color=['red','blue','green','yellow']
function colorise(){
        const element=document.getElementsByClassName('.num ')
        colors.reverse()
        for(let i=0;i<element.length;i++){
        element[i].insertAdjacentText=colors[i]
        }
    }
    const but = document.querySelector('#but');
but.addEventListener('click',colorise)
// const but= document.querySelector('#red');
// function redcolor(){
//     const element=document.querySelector('#one');
//     element.className='red';
// }
// but.onclick=redcolor

// const b= document.querySelector('#blue');
// function bluecolor(){
//     const element=document.querySelector('#two');
//     element.className='blue';
// }
// b.addEventListener('click',bluecolor)