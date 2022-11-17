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



const numBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals");

let activeNumber = document.getElementById("active-number");
let savedNumber = document.querySelector("#saved-number");
let operatorContainer = document.querySelector("#operator-container");

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    activeNumber.textContent += button.value;
  });
});

let firstNumber;

const operatorBtns = document.querySelectorAll(".operators");

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    savedNumber.textContent = activeNumber.textContent;
    activeNumber.textContent = "";
    operatorContainer.textContent = button.textContent;
    operatorContainer.value = button.id;
  });
});
