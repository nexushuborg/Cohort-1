const items =  document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');


items.forEach(item =>{
    item.addEventListener('dragstart',(e) =>{
        e.dataTransfer.setData('text/plain',e.target.id);
    })
})



containers.forEach(container => {
    container.addEventListener('dragover',(e) =>{
        e.preventDefault();
    })
    container.addEventListener('drop',(e) =>{
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableELement = document.getElementById(id);
        container.appendChild(draggableELement)
    })
})