const items = document.querySelectorAll('.item');
console.log(items);
const containers = document.querySelectorAll('.container');
console.log(containers)
items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id); 
    });
});
containers.forEach(cont => {
    cont.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });
    cont.addEventListener('drop', (e) => {
        e.preventDefault();
       const id = e.dataTransfer.getData('text');
       const draggedElement = document.getElementById(id);
       cont.appendChild(draggedElement); 
    });
});