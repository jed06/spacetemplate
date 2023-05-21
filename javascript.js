document.addEventListener("DOMContentLoaded", (event) => {
  

  
(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

console.log('test');
console.log({
    test: 2
});
console.log([1, 2, 3]);
console.log([{
    test: 1
}, {
    test: 2
}]);

document.addEventListener("DOMContentLoaded", (event)=> {
  var timer = 0;
  setInterval(() => {
    timer += 1/100; // how much to add every 10ms
    console.log(parseFloat(timer.toFixed(10)));
  }, 10);
clearInterval(timer);
});

  console.log("DOM fully loaded and parsed");
});
