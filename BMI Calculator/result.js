document.addEventListener("DOMContentLoaded", function () {
  // get the bmi value from the url parameter
  const urlParams = new URLSearchParams(window.location.search);
  const bmi = urlParams.get("bmi");

  // display the result
  const result = document.getElementById("Bmi-result");

  if (bmi !== null) {
    //  use toFixed() to display the value in one decimal place
    const formattedBmi = parseFloat(bmi).toFixed(1);

    let message = ` <strong>Your BMI is ${formattedBmi} </strong> <br> <br>`;
    if (formattedBmi >= 25) {
      message += "you are overweight";
    } else if (formattedBmi > 29.9) {
      message += "You are obese";
    } else if (formattedBmi < 18.5) {
      message += " You are underweight";
    } else {
      message += " you have a normal BMI";
    }

    // set the message with line breaks
    result.innerHTML = message;
  } else {
    result.textContent = " No BMI data Available";
  }
});
