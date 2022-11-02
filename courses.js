AOS.init();
window.onload = function() {
    typeWriter();
  };
var i = 0;
var txt = "Courses"; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
