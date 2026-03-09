// const but = document.querySelector('#red')
// function colorise(){
//     const element = document.querySelector("#one");
//     element.className='red';

// }
// but.onclick = colorise

let colour =['red','blue','orange','green'];

function colorise(){
    const elements= document.querySelectorAll('.num')
    colour.reverse()
    for(let i=0; i<elements.length ; i++){
        elements[i].id=colour[i];
    }
}
const but = document.querySelector('#but')
but.addEventListener('click',colorise)

