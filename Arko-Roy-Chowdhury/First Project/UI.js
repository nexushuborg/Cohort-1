const items = document.querySelectorAll(".item");
const containers = document.querySelectorAll(".container");

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});
