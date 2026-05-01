//ADD DRAG EVENTS
let draggedTask = null;
function addDragEvents(task) {
    task.addEventListener("dragstart", (e) => {
        draggedTask = task;
        if (e.target.classList.contains("item")) {
            dragged = e.target;
            setTimeout(() => {
                e.target.classList.add("dragging");
            }, 0);
        }
    });
    
}