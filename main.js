const numBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals");
const allclearBtn = document.querySelector(".all-clear");

let activeNumber = document.getElementById("active-number");
let savedNumber = document.querySelector("#saved-number");
let operatorContainer = document.querySelector("#operator-container");
let chosenOperator;

function compute() {
  let x = parseFloat(savedNumber.textContent);
  let y = parseFloat(activeNumber.textContent);
  let operator = chosenOperator;

  savedNumber.textContent = "";
  operatorContainer.textContent = "";

  switch (operator) {
    case "add":
      activeNumber.textContent = x + y;
      break;
    case "subtract":
      activeNumber.textContent = x - y;
      break;
    case "multiply":
      activeNumber.textContent = x * y;
      break;
    case "divide":
      activeNumber.textContent = x / y;
      break;
    default:
      activeNumber.textContent = "Error";
  }
}

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    activeNumber.textContent += button.value;
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    savedNumber.textContent = activeNumber.textContent;
    activeNumber.textContent = "";
    operatorContainer.textContent = button.textContent;
    chosenOperator = button.id;
  });
});

equalsBtn.addEventListener("click", compute);

allclearBtn.addEventListener("click", () => {
  activeNumber.textContent = "";
  operatorContainer.textContent = "";
  savedNumber.textContent = "";
});
