AOS.init();

window.onload = function () {
  typeWriter();
};
var i = 0;
var txt = "Experience"; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
