// const addBtn=document.getElementById("addBtn");
// const inputField=document.getElementById("taskInput");
// const todoColumn=document.getElementById("todo");

// let count=0;
// function addTask(){
//     const taskText=taskInput.value.trim();
//     if(taskText==="")
//         return;
//     count++;
//     const div=document.createElement("div");
//     div.className="item";
//     div.id="item"+count;
//     div.draggable=true;
//     div.innerText=taskText;

//     addDragEvents(div);

//     todoColumn.appendChild(div);
//     taskInput.value="";
// }
// addBtn.addEventListener("click",addTask);
// taskInput.addEventListener("keydown",(e)=>{
//     if(e.key!=="Enter")
//         return;
//     e.preventDefault();
//     addTask();
    
// });
// function addDragEvents(item){
//     item.addEventListener("dragstart",(e)=>{
//         e.dataTransfer.setData("text/plain",e.target.id);
//     })
// }

// const items=document.querySelectorAll(".item");
// const columns=document.querySelectorAll(".column");
// const draggedItem=null;
// items.forEach(item=>{
//     item.addEventListener("dragstart",(e)=>{
//         e.dataTransfer.setData("text/plain",e.target.id);
//         draggedItem=item;
//     })
// })

// columns.forEach(column=>{
//     column.addEventListener("dragover",(e)=>{
//         e.preventDefault();
//     })
//     column.addEventListener("drop",(e)=>{
//         e.preventDefault();
//         const id=e.dataTransfer.getData("text");
//         const draggableElement=document.getElementById(id);
//         column.appendChild(draggableElement);
//     })
// })

