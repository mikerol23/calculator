const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

function operate(x, y, operator) {
  return operator(x, y);
}

let currentDisplay = document.querySelector(".display");

const numBtns = document.querySelectorAll(".numbers");
numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    currentDisplay.textContent += button.value;
  });
});
