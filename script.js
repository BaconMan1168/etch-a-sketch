const grid = document.querySelector(".grid");

function getRandomRgbColor() {
     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);
     return `rgb(${r}, ${g}, ${b})`;
}

function increaseOpacity(element){
    element.style.opacity += 0.2;
}

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomRgbColor();
        square.style.opacity = (+square.style.opacity + 0.1).toString();
    });
    grid.appendChild(square);
}

const btn = document.querySelector("#grid-change");
btn.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per side in the new grid (Limit is 100 squares)");
    if (input > 100){
        input = 100;
    }

    grid.innerHTML = "";
    for (let i = 0; i < (input * input); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 800/input + "px";
        square.style.height = 800/input + "px";

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomRgbColor();
            square.style.opacity = (+square.style.opacity + 0.1).toString();
        });
        grid.appendChild(square);
    }


})