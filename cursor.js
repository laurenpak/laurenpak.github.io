// create cursor element
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
cursor.id = "cursor";
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let isFirstMove = true;

// update cursor position
document.addEventListener("mousemove", (e) => {
  if (isFirstMove) {
    cursor.classList.add("visible");
    isFirstMove = false;
  }
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  // check if hovering over clickable element
  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
  if (
    elementUnderCursor &&
    (elementUnderCursor.tagName === "A" ||
      elementUnderCursor.tagName === "BUTTON" ||
      elementUnderCursor.closest("a") ||
      elementUnderCursor.closest("button") ||
      elementUnderCursor.closest(".project-card"))
  ) {
    cursor.classList.add("hover");
  } else {
    cursor.classList.remove("hover");
  }
});

// click effect
document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});
