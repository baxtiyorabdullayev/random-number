let container = document.querySelector(".containder");

// inputs box
let inputsBox = document.createElement("div");
inputsBox.className = "inputs";

// min number input box
let minNumberBox = document.createElement("div");
minNumberBox.className = "min-number";
let minNumberText = document.createElement("span");
minNumberText.textContent = "Min";
let min = document.createElement("input");
min.type = "number";
min.className = "min-input";

// max number input box
let maxNumberBox = document.createElement("div");
maxNumberBox.className = "max-number";
let maxNumberText = document.createElement("span");
maxNumberText.textContent = "Max";
let max = document.createElement("input");
max.type = "number";
max.className = "max-input";

// output box
let output = document.createElement("p");
output.textContent = "#";
output.className = "output-number";

// generate button
let btn = document.createElement("button");
btn.textContent = "Generate!";
btn.className = "generate-button";

// random number creating
const getRandomNUmber = (a, b) => {
  a = Number(min.value);
  b = Number(max.value);
  if (min.value === "" || max.value === "") {
    alert("Iltimos Min va Max qiymatlarni kiriting!");
    return;
  }

  if (a > b) {
    alert("Min qiymat Max qiymatdan kichkina bo'lishi kerak");
    return;
  }
  output.textContent = Math.floor(Math.random() * (b - a + 1)) + 1;
};

btn.addEventListener("click", getRandomNUmber);

// appendChild
inputsBox.appendChild(minNumberBox);
minNumberBox.appendChild(minNumberText);
minNumberBox.appendChild(min);

inputsBox.appendChild(maxNumberBox);
maxNumberBox.appendChild(maxNumberText);
maxNumberBox.appendChild(max);

container.appendChild(inputsBox);
container.appendChild(output);
container.appendChild(btn);
