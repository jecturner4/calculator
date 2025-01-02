//variables for areas on calculator for easy access
const displayArea = document.querySelector(".calcDisplay");
const buttonArea = document.querySelector(".calcButtons");

// variables for user inputs
let val1 = ""; // variable for final value (number, not array or string)
let val2 = ""; // variable for final value (number, not array or string)
let operatorInput = ""; // operator input value
let operatorResult; // variable for answer based on val1, operatorInput and val2
let evaluated = false;

// function to create grids for buttons (a la etch a sketch)
function createNumberGrid() {
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    buttonArea.appendChild(row);

    for (let j = 0; j < 4; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.id = `row${i + 1}col${j + 1}`;
    }
  }
}

// function to store input of calcualor values
function storeNumInput() {
  if (operatorInput === "") {
    val1 += this.textContent;
    document.querySelector(".calcDisplay").textContent = val1;
  } else {
    val2 += this.textContent;
    document.querySelector(".calcDisplay").textContent = val2;
  }
}

// function that checks if a decimal already exists in a number
function addDecimal() {
  if (operatorInput === "") {
    if (val1.includes(".")) {
    } else {
      val1 += this.textContent;
      document.querySelector(".calcDisplay").textContent = val1;
    }
  } else {
    if (val2.includes(".")) {
    } else {
      val2 += this.textContent;
      document.querySelector(".calcDisplay").textContent = val2;
    }
  }
}

// function that clears data when "on/c" button is pressed
function clearData() {
  val1 = "";
  val2 = "";
  operatorInput = "";
  operatorResult = "";
  document.querySelector(".calcDisplay").textContent = "0";
}

// function for new calculation

function newCalc() {
  val1 = operatorResult;
  val2 = "";
}

// function that evals total from val1, val2, and operator input
function evalTotal() {
  val1 = Number(val1);
  val2 = Number(val2);
  if (operatorInput === "+") {
    add();
    newCalc();
  } else if (operatorInput === "-") {
    subtract();
    newCalc();
  } else if (operatorInput === "*") {
    multiply();
    newCalc();
  } else if (operatorInput === "/") {
    if (val2 === 0) {
      val1 = "";
      val2 = "";
      operatorInput = "";
      document.querySelector(".calcDisplay").textContent = "ERR";
    } else {
      divide();
      newCalc();
    }
  }
}

// function that stores the operator input
function storeOpInput() {
  operatorInput = this.textContent;
  if (operatorInput === "") {
  } else {
    evalTotal();
  }
}

// function to clear last entered digit
function clearLastDigit() {
  if (val2 === "") {
    val1 = val1.slice(0, -1);
    displayArea.textContent = val1;
  } else {
    val2 = val2.slice(0, -1);
    displayArea.textContent = val2;
  }
}

// function to reverse pos/neg +/-
function reverseType() {
  if (val2 === "") {
    if (val1 === Math.abs(val1)) {
      val1 *= -1;
      displayArea.textContent = val1;
    } else {
      val1 = Math.abs(val1);
      displayArea.textContent = val1;
    }
  } else {
    if (val2 === Math.abs(val1)) {
      val2 *= -1;
      displayArea.textContent = val2;
    } else {
      val2 = Math.abs(val2);
      displayArea.textContent = val2;
    }
  }
}

// function call to create grid
createNumberGrid();

// add text content to all button divs
document.getElementById("row5col1").textContent = "";
document.getElementById("row5col2").textContent = "0";
document.getElementById("row5col3").textContent = ".";
document.getElementById("row5col4").textContent = "=";
document.getElementById("row4col1").textContent = "1";
document.getElementById("row4col2").textContent = "2";
document.getElementById("row4col3").textContent = "3";
document.getElementById("row4col4").textContent = "+";
document.getElementById("row3col1").textContent = "4";
document.getElementById("row3col2").textContent = "5";
document.getElementById("row3col3").textContent = "6";
document.getElementById("row3col4").textContent = "-";
document.getElementById("row2col1").textContent = "7";
document.getElementById("row2col2").textContent = "8";
document.getElementById("row2col3").textContent = "9";
document.getElementById("row2col4").textContent = "/";
document.getElementById("row1col4").textContent = "*";
document.getElementById("row1col3").textContent = "+/-";
document.getElementById("row1col2").textContent = "<--";
document.getElementById("row1col1").textContent = "AC";

// variable for num keys on keyboard
const zero = document
  .getElementById("row5col2")
  .addEventListener("click", storeNumInput);
const decimal = document
  .getElementById("row5col3")
  .addEventListener("click", addDecimal);
const one = document
  .getElementById("row4col1")
  .addEventListener("click", storeNumInput);
const two = document
  .getElementById("row4col2")
  .addEventListener("click", storeNumInput);
const three = document
  .getElementById("row4col3")
  .addEventListener("click", storeNumInput);
const four = document
  .getElementById("row3col1")
  .addEventListener("click", storeNumInput);
const five = document
  .getElementById("row3col2")
  .addEventListener("click", storeNumInput);
const six = document
  .getElementById("row3col3")
  .addEventListener("click", storeNumInput);
const seven = document
  .getElementById("row2col1")
  .addEventListener("click", storeNumInput);
const eight = document
  .getElementById("row2col2")
  .addEventListener("click", storeNumInput);
const nine = document
  .getElementById("row2col3")
  .addEventListener("click", storeNumInput);
// var for operator keys on keyboard
const onClearButton = document
  .getElementById("row1col1")
  .addEventListener("click", clearData);
const plusButton = document
  .getElementById("row4col4")
  .addEventListener("click", storeOpInput);
const minusButton = document
  .getElementById("row3col4")
  .addEventListener("click", storeOpInput);
const divideButton = document
  .getElementById("row2col4")
  .addEventListener("click", storeOpInput);
const multiplyButton = document
  .getElementById("row1col4")
  .addEventListener("click", storeOpInput);
// var for equal button to evalTotal
const equalButton = document
  .getElementById("row5col4")
  .addEventListener("click", evalTotal);
// var for backspace button to clear last entered digit
const backspace = document
  .getElementById("row1col2")
  .addEventListener("click", clearLastDigit);
//var for reverse type
const reverseButton = document
  .getElementById("row1col3")
  .addEventListener("click", reverseType);

// add function
function add() {
  operatorResult = val1 + val2;
  document.querySelector(".calcDisplay").textContent = operatorResult;
}
// subtract function
function subtract() {
  operatorResult = val1 - val2;
  document.querySelector(".calcDisplay").textContent = operatorResult;
}
// multiply function
function multiply() {
  operatorResult = val1 * val2;
  document.querySelector(".calcDisplay").textContent = operatorResult;
}
//divide function
function divide() {
  operatorResult = val1 / val2;
  document.querySelector(".calcDisplay").textContent = operatorResult;
}
