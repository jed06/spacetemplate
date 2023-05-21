document.addEventListener("DOMContentLoaded", (event) => {
  

  var timer = 0;
  setInterval(() => {
    timer += 1/100; // how much to add every 10ms
    console.log(parseFloat(timer.toFixed(10)));
  }, 10);

});
  
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}  
  console.log("DOM fully loaded and parsed");
});
