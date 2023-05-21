document.addEventListener("DOMContentLoaded", (event) => {
  var timer = 0;
  var timerElement = document.getElementById("timer");

  setInterval(() => {
    timer += 1 / 250;
    timer += 300; // how much to add every 10ms
    timerElement.textContent = parseFloat(timer.toFixed(10));
  }, 1);
});
