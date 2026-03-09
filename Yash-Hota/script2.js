let colors=['red','orange','green','blue']

function colorise(){
    let element =document.querySelectorAll('.num');
    colors.reverse()
    console.log(colors)
    for(let i=0;i<element.length;i++){
        element[i].id=colors[i];
    }
}

     const but = document.querySelector('#but');
but.addEventListener('click',colorise)




