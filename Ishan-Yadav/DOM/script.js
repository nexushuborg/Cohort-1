const elements=document.getElementsByClassName('num');
// console.log(element)

// const arr=[1,2,3]
// for(e of arr){
//     console.log(e)
// }


let colors=["red","yellow","blue","green"]
function calorise(){
    const elements=document.getElementsByClassName('num');
    colors.reverse()
    let i=0;
    for(e of elements){
       e.style.color= colors[i];
       i++;
     }
}

const but=document.getElementById('but')

but.onclick=calorise

