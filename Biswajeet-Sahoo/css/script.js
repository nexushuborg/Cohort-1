let colors =["red","blue","green","yellow"];
function colorise(){
    let element=document.querySelectorAll('.num');
    colors.reverse()
    console.log(colors)
    for (let i = 0; i < element.length; i++) {
        element[i].id=colors[i];
    }
}
    const but =document.querySelector('#but')
but.addEventListener('click',colorise)



// const but= document.querySelector('#red')
// function redcolor() {
//     const element=document.querySelector('#three');
//     element.className='red';
// }

// // but.onclick = redcolor
// but.addEventListener('click',redcolor)