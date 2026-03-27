const items=document.querySelectorAll(".item");
const container= document.querySelectorAll(".container");
items.forEach(items => {
    items.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain',e.target.id);
    })
})

container.forEach(container => {
    container.addEventListener('dragenter',(e) => {
        e.preventDefault()

        container.style.backgroundColor='lightgreen';
    })
    container.addEventListener('dragover',(e) => {
        e.preventDefault()
    })
        container.addEventListener('dragleave',(e) =>{
            e.preventDefault()

            container.style.backgroundColor = '';
        })
    
    container.addEventListener('drop',(e) =>{
        e.preventDefault()

        const id = e.dataTransfer.getData('text');
        const draggableElement=document.getElementById(id);
        container.appendChild(draggableElement);
    })
})

