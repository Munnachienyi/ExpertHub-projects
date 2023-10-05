const display = document.getElementById("display");

const thebutton = document.querySelectorAll("button");
console.log(thebutton);

// create an array where the whole values of the button would be fixed into
let calculation = [];

// create an accumulate variable, only assign a value when converted to a string
let accumulate;

function calculate(button) {
  // save the value of the button  in a variable and display
  const value = button.textContent;

  if (value === "AC") {
    calculation = [];
    display.textContent = "00";
  } else if (value === "=") {
    display.textContent = eval(accumulate);
  } else {
    calculation.push(value);
    accumulate = calculation.join("");
    display.textContent = accumulate;
  }
}
thebutton.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
