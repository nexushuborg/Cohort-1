//const but= document.querySelector('#red');
function redcolor()
{
    const element=document.querySelector('#three');
    element.className='red';
}
//but.onclick=redcolor
//  but.onclick=document.querySelector('#three').classList.add('red')
// but.addEventListener('click',redcolor)
let color=['red','yellow','blue','orange']
function colorise()
{
    const element=document.querySelectorAll('.num');
    color.reverse()
    console.log(color)
    for(let i=0;i<element.length;i++)
    {
        element[i].id=color[i]
    }
}
const but= document.querySelector('#but');
addEventListener('click',colorise)
