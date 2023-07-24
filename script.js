let root = document.documentElement;
const htmlColor = document.querySelector(".colorChoice");
const htmlErase = document.querySelector(".erase");
const htmlRainbow = document.querySelector(".rainbow");
const htmlReset = document.querySelector(".reset");
const container = document.querySelector(".container");
const htmlSize = document.querySelector(".size");
const sketchScreen = document.querySelector(".sketchScreen");

const mouseOverEvent = (color) => {
  let list = document.querySelectorAll(".col .row");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", () => {
      list[i].style.backgroundColor = color;
    });
  }
};

const mouseOverChangeColor = (newColor) => {
  let list = document.querySelectorAll(".col, .row");

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", () => {
      list[i].style.backgroundColor = newColor;
    });
  }
};

const erase = () => {
  let list = document.querySelectorAll(".col, .row");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", () => {
      list[i].style.backgroundColor = "";
    });
  }
};

const reset = () => {
  let list = document.querySelectorAll(".col, .row");
  for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "";
  }
};

function makeGrid(size) {
  document.querySelector(".sketchScreen").innerHTML = "";
  let screen = document.querySelector(".sketchScreen");
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("col");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
  mouseOverEvent(htmlColor.value);
}

const rainbow = () => {
  let list = document.querySelectorAll(".col, .row");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", () => {
      let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
      ];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      list[i].style.backgroundColor = randomColor;
    });
  }
};

htmlColor.addEventListener("input", () => {
  let newColor = htmlColor.value;
  mouseOverChangeColor(newColor);
});
htmlErase.addEventListener("click", erase);
htmlReset.addEventListener("click", reset);
htmlSize.addEventListener("input", () => {
  makeGrid(htmlSize.value);
});
htmlRainbow.addEventListener("click", rainbow);

makeGrid(htmlSize.value);
