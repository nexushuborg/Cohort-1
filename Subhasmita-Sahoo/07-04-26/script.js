const items = document.querySelectorAll(".item");
const containers = document.querySelectorAll(".container");

// DRAG EVENTS
items.forEach(item => {
  item.addEventListener("dragstart", (e) => {
    // STORE ID OF DRAGGED ELEMENT
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});
containers.forEach(container => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  container.addEventListener("dragenter", (e) => {
    e.preventDefault();
    container.classList.add("hovered");
  });
  container.addEventListener("dragleave", () => {
    container.classList.remove("hovered");
  });
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    container.classList.remove("hovered");
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    container.appendChild(draggedElement);
  });
});