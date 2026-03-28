//Five main events of drag and drrop
// 





const items=document.querySelectorAll("item")
const containers= document.querySelectorAll(".container")

items.forEach(item => {
    item.addEventListner("dragstart",(e) =>
    {
        e.dataTransfer.setData("text/plain",e.target.id);

        setTimeout(()=> item.classList.add("dragging"),0);
    })
    
})
containers.forEach(container => 
{
    container.addEventListener("dragover",(e)=>
    {
        e.preventDefault();
    });
    container.addEventListener("dragenter",(e)=>
    {
        e.preventDefault();
        container.classList.add("hover");
    });

});

//dropping itttems
containers.forEach(container => 
{
    container.addEventListener("drop",(e)=>
    {
        e.preventDefault();
        const id= e.dataTransfer.getData("text/plain");
        const item=document.getElementById(id);
        container.appendChild(item);
        item.classList.remove("dragging");
        container.classList.remove("hover");
    });
});
