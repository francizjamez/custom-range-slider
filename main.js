const circle = document.getElementById("circle");
const body = document.querySelector("body");
const value = document.querySelector("span");
const visualValue = document.getElementById("visual-value");

circle.addEventListener("mousedown", mouseDownHandler);
body.addEventListener("mouseup", mouseUpHandler);
let circlePosition = 0;
let mouseDownPosition = 0;

let prevX = 0;

function mouseDownHandler(e) {
  mouseDownPosition = e.x;
  console.log(mouseDownPosition);
  body.addEventListener("mousemove", mouseMoveHandler);
}

function mouseMoveHandler(e) {
  const deltaX = calculateDelta(e.x);

  if (deltaX + circlePosition < 201 && deltaX + circlePosition > -1) {
    circle.style.left = circlePosition + deltaX + "px";
    prevX = circlePosition + deltaX;
    value.innerHTML = (((circlePosition + deltaX) / 200) * 100).toFixed(2);
    visualValue.style.width = circlePosition + deltaX + "px";
  }
}

function mouseUpHandler(e) {
  body.removeEventListener("mousemove", mouseMoveHandler);
  circlePosition = prevX;
}

function calculateDelta(x) {
  return x - mouseDownPosition;
}
