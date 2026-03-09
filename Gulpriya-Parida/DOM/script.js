// get element by id name 
//let ele=document.getElementById("one")
//console.log(ele)
//ele.innerText ="hi"


//element by class name
//returns HTML.COLLECTION[]
// let element=document.getElementsByClassName("first")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)

// let element=document.getElementsByClassName("first")
// for(let i=0;i<element.length;i++){
//     console.log(element[i].innerText);
// }
// for (ele of element){
//     console.log(ele.innerText)
// } 
//get element by tag name 
// let tag = document.getElementsByTagName('h1')
// for(let i=0; i<tag.length;i++){
//     console.log(tag[i].innerText)
// }


//query selectorALL
// let q= document.querySelectorAll("h1")
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }

//query selector =first match
// let q= document.querySelector("h1")
// console.log(q)
// for(let i=0; i<q.length ; i++){
//     console.log(q[i].innerText)
// }

// const element = document.querySelector("div")
// console.log(element.textContent)
// console.log(element.innerText)

let colors=['red','blue','orange','green'];
function colorise() {
        let element=document.querySelectorAll('.num');
        colors.reverse()
        console.log(colors)
        for(let i=0;i<element.length;i++){
        element[i].id = colors[i];
        }

    }


    const but=document.querySelector('#but');
but.addEventListener('click',colorise)



// function redcolor(){
//     const element=document.querySelector('#three');
//     element.className='red';
// }
// but.onclick=redcolor
// but.addEventListener('click',redcolor)

// const bu=document.querySelector('#blue');


// function bluecolor(){
//     const element=document.querySelector('#two');
//     element.className='blue';
// }
// bu.onclick=bluecolor
//but.onclick = document.querySelector('#three').classList.add('red')