// const items = document.querySelectorAll('.item');
// const containers = document.querySelectorAll('.container');



// items.forEach(item => {
//     item.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', item.id);
//     });
//     //item.addEventListener('text/plain', dragEnd);
// });

// containers.forEach(container => {

//     container.addEventListener('dragover', (e) => {
//         e.preventDefault()
//     })

//     container.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const id = e.dataTransfer.getData('text/plain');
//         const draggableElement = document.getElementById(id);
//         container.appendChild(draggableElement);  
//     })
// })
const addBtn=document.getElementById("addBtn");
const taskInput=document.getElementById("taskInput");
const todo=document.getElementById("todo")
let count=0;
function addTask(){
    const text=taskInput.ariaValueMax.trim();
    if(text=="") return;
    count++;

 const div=document.createElement("div");
 div.className="item";
 div.id="item " +count;
 div.draggable=true;
 div.innerText=text;

 addDragEvents=text;
 todo.appendChild(div);
 taskInput.value="";
}

addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keydown",(e)=>{

    if(e.key!=="Enter") return;
    e.preventDefault();
    addTask();
})
function addDragEvents(item){
    item.addEventListener("dragstart",(e) =>{
        e.dataTransfer.setData("text/plain",e.target.id);


    });
}

const containers=document.querySelectorAll(".container");
containers.forEach(container =>{
    containers.addEventListener("dragover",(e) =>{
        e.preventDefault();

    });


   container.addEventListener('drop', (e) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        container.appendChild(draggableElement);
    })

});