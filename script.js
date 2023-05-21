document.addEventListener("DOMContentLoaded", (event) => {
  var timer = 0;
  var timerElement = document.getElementById("timer");

  setInterval(() => {
    timer += 1 / 250;
    timerElement.textContent = parseFloat(timer.toFixed(10));
  }, 1);
});
