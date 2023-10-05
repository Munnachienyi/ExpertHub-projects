document.addEventListener("DOMContentLoaded", function () {
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  let mybutton = document.getElementById("btn");
  // let display = document.getElementById("display");

  mybutton.addEventListener("click", () => {
    let inputWeight = Number(weight.value);
    let inputHeight = Number(height.value);

    if (
      isNaN(inputHeight) ||
      isNaN(inputWeight) ||
      inputHeight <= 0 ||
      inputWeight <= 0
    ) {
      // if the inputfield is empty, this is for validation of the input
      alert("please enter the correct values");
      return;
    }

    let heightSquare = Math.pow(inputHeight, 2);
    let bmi = inputWeight / heightSquare;

    // pass BMI value as a URL parameter and navigate to the result page
    window.location.href = `bmi.html?bmi=${bmi}`;
  });
});
