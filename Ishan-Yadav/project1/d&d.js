const items = document.querySelectorAll('.item');

const containers = document.querySelectorAll('.container');

items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(()=> item.classList.add("dragging"),0) 
    });
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging")
    })
});
containers.forEach(cont => {
    cont.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });
    cont.addEventListener('drop', (e) => {
        e.preventDefault();
        cont.classList.add("hovered") 
    });
    cont.addEventListener("dragleave",()=>{
        cont.classList.remove("hover");
    })
    cont.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        cont.appendChild(draggedElement);
    });
});

