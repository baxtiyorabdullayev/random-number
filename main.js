let btn = document.querySelector(".generate-button"),
  min = document.querySelector(".min-input"),
  max = document.querySelector(".max-input"),
  output = document.querySelector(".output-number");

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
