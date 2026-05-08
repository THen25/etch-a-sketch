const container = document.querySelector("#container");
const changeSizeButton = document.querySelector("#change-size");
const clearGridButton = document.querySelector("#clear-grid");
const toggleColorModeButton = document.querySelector("#toggle-color-mode");

let colorMode = "random"; // "random" | "black"

toggleColorModeButton.addEventListener("click", () => {
  colorMode = colorMode === "random" ? "black" : "random";
  toggleColorModeButton.textContent =
    colorMode === "random" ? "Mode: Random Color" : "Mode: Black";
});

clearGridButton.addEventListener("click", () => {
  const gridItems = container.querySelectorAll("div");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

changeSizeButton.addEventListener("click", () => {
  const newSize = prompt("Enter new size (1-100):");
  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = "";
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = 100 / size + "%";
    newDiv.style.height = 100 / size + "%";
    newDiv.style.border = "1px solid black";

    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor =
        colorMode === "random" ? getRandomRgb() : "black";
    });

    container.appendChild(newDiv);
  }
}

createGrid(16);
