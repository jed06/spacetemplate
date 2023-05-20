document.addEventListener("DOMContentLoaded", (event) => {
  

  var timer = 0;
  setInterval(() => {
    timer += 1/100; // how much to add every 10ms
    console.log(parseFloat(timer.toFixed(10)));
  }, 10);

});
  
  
  console.log("DOM fully loaded and parsed");
});
