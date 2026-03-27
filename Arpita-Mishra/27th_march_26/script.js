const items=document.querySelectorAll('.item'); // return value is array
const containers=document.querySelectorAll('.container');

items.forEach(item => {
    item.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/plain',e.target.id);  //helps to store the data in temporary variable
    })
})
containers.forEach(container =>{
    // container.addEventListener('dragenter',(e)=>{
    //     e.preventDefault()
    //     container.style.backgroundcolor='LightGreen'
    // })
    container.addEventListener('dragover',(e)=>{
        e.preventDefault()
     })
    // container.addEventListener('dragover',(e)=>{
    //     e.preventDefault()
    //     container.style.backgroundcolor=''
    //  })
     container.addEventListener('drop',(e)=>{
        e.preventDefault()
        const id=e.dataTransfer.getData('text');
        const draggableElement =document.getElementById(id);
        container.appendChild(draggableElement); // child class k andar dal deta hai
     })
})

