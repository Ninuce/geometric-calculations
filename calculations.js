  // Get figure type, sort by the method that is relevand to the specified figure
function calculate(figureType) {
  switch (figureType) {

    case "circle":
      // Get the radius value for circle from the textarea with id "radius"
      var radius = document.getElementById("radius").value;
      //Check if the number is above 0 and an actual number
      if (validateNumber(radius)) {
        // Display final result in a div
        var circleResult = document.getElementById("circleArea");
        circleResult.innerHTML = calculateCircleArea(radius);
        // If value is not a number (or below zero), display an alert
      } else {
        notANumber();
      }
      break;

    case "rectangle":
      var rectangleLength = document.getElementById("rect-length").value;
      var rectangleWidth = document.getElementById("rect-width").value;
      if (validateNumber(rectangleLength) && validateNumber(rectangleWidth)) {
        var rectangleResult = document.getElementById("rectangleArea");
        rectangleResult.innerHTML = calculateRectangleArea(rectangleLength, rectangleWidth);
        // If value is not a number (or below zero), display an alert
      } else {
        notANumber();
      }
      break;

    case "triangle":
      var triBase = document.getElementById("tri-base").value;
      var triHeigth = document.getElementById("tri-heigth").value;
      if (validateNumber(triBase) && validateNumber(triHeigth)) {
        var triangleResult = document.getElementById("triangleArea");
        triangleResult.innerHTML = calculateTriangleArea(triBase, triHeigth);
        // If value is not a number (or below zero), display an alert
      } else {
      notANumber();
      }
      break;

  }
}


function validateNumber(input) {
  var inputValidator = isNaN(input);
  if (inputValidator == false && input > 0) {
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


function calculateRectangleArea(rectangleLength, rectangleWidth) {
  var rectangleArea = Math.round(rectangleLength * rectangleWidth);
  console.log("Rectangle area is: " + rectangleArea);
  return rectangleArea;
}


function calculateTriangleArea(triBase, triHeigth) {
  var triangleArea = Math.round((triBase * triHeigth)/2);
  console.log("Triangle area is: " + triangleArea);
  return triangleArea;
}


function notANumber() {
  alert("Hmm, something went wrong. Please make sure you enter a number above 0.");
}
