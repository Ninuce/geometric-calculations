// When user has put in the value(s) and pressed the "calculate" button, return the result of the area.


function calculate() {
  // Get user input
  var radius = document.getElementById("radius").value;

  if (validateNumber(radius)) {
    // Display final result
    var circleResult = document.getElementById("circleArea");
    circleResult.innerHTML = calculateCircleArea(radius);
  } else {
    alert("Hmm, something went wrong. Please make sure you enter a number above 0.")
  }
}


function validateNumber(radius) {
  var inputValidator = isNaN(radius);

  if (inputValidator == false && radius > 0) {
    return true;
  } else {
    return false;
  }
}


function calculateCircleArea(radius) {
  var circleArea = Math.round(radius * 3.14);
  console.log("Circle area is: " + circleArea);
  return circleArea;
}
