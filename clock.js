var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
    $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000);
}
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var time = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").textContent = time;

  setTimeout(updateClock, 1000); // Update the clock every second
}

updateClock();
