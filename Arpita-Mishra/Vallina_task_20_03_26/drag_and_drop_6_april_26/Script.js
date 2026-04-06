const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todo = document.getElementById("todo");

let count = 0;


function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  count++;

  const div = document.createElement("div");
  div.className = "item";
  div.id = "item" + count;
  div.draggable = true;
  div.innerText = text;

  addDragEvents(div);

  todo.appendChild(div);

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  addTask();
});
/*

Diffference between keydown  and keyup
keydown: When a key is pressed down
keyup: When a key is released

*/

function addDragEvents(item) {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
}


const containers = document.querySelectorAll(".container");

containers.forEach(container => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(id);

    container.appendChild(draggedElement);
  });
});