const items = document.querySelectorAll('.Item');
const containers = document.querySelectorAll('.container')

items.forEach(item => {
    item.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/plain',e.target.id); // this stores the data in the temporary variable that is taken for the drag
    })
})

containers.forEach(container =>{
    container.addEventListener('dragover',(e) =>{
        e.preventDefault()
    })
    container.addEventListener('drop',(e) => {
        e.preventDefault()
    
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    console.log(draggableElement)
    console.log(container)
    container.appendChild(draggableElement);
    })
})