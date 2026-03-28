//five main events in drag and drop
//1. dragstart
//2. drag
//3. dragenter
//4. dragover
//5. drop

const items=document.querySelectorAll(".item");
const containers=document.querySelectorAll(".container");

//dragstart
items.forEach(item=>{
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text/plain",e.target.id);

        setTimeout(()=>{ item.classList.add("dragging")},0);
    });
});

//allowing dropping
containers.forEach(container=>{
    container.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });
    container.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        container.classList.add("hover");
    });
});

//drop
containers.forEach(container=>{
    container.addEventListener("drop",(e)=>{
        e.preventDefault();
        const id=e.dataTransfer.getData("text/plain");
        const item=document.getElementById(id);
        container.appendChild(item);
        item.classList.remove("dragging");
        container.classList.remove("hover");
    });
});
