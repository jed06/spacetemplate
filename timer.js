var speeds = [0.03/60*60, 3/3600, 28/3600, 320/3600, 600/3600, 1000/3600, 2288/3600, 10100/3600, 10603/3600, 12146/3600, 15233/3600, 21675/3600, 29236/3600, 53853/3600, 78337/3600, 
             107082/3600, 133200/3600, 430000/3600, 670616629/3600];
/*Snail:  0.03 mph 
Person: 3 mph
Bike: 28mph
Car: up to 320 mph
Airplane: 600pmh
Earth: rotates at 1,000 mph
Moon: 2,288 mph
Rocket: up to 10,100 mph
Pluto: 10,603 mph
Neptune: 12,146 mph
Uranus: 15,233 mph
Saturn: 21,675
Jupiter: 29,236
Mars: 53,853 mph
Venus: 78,337
Mercury: 107,082
Meteor: 133,200 mph
Fastest man made object: 430,000
Light:670,616,629*/

var index = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  var timer = 0;
  var timerElement = document.getElementById("timer");
  var distanceElement = document.getElementById("distance");
  setInterval(() => {
    timer += 1 / 250;
    timerElement.textContent = parseFloat(timer.toFixed(10));
    distanceElement.textContent = parseFloat(timer.toFixed(0)*speeds[index]);
  }, 1);
  
  
  
});
