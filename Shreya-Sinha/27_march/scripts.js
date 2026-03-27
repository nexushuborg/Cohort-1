const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');



items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);//helps to store the data in temporary variables 
    });
    //item.addEventListener('text/plain', dragEnd);
});

containers.forEach(container => {

    container.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
      //  container.addEventListener('dragenter', (e) => {
        //e.preventDefault()

    //container.style.backgroundColor = 'lightblue';
    //})
    // container.addEventListener('dragleave', (e) => {
    //     e.preventDefault()

    //     container.style.backgroundColor = '';
    // })
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        container.appendChild(draggableElement);  //child class k andar dal deta
    })
})