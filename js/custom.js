var i = 0;
var txt = '\nSoftware Engineer |\n Django Fullstack |\n Python, Data Science, DevOps';
var speed = 50;

// Start the typewriter effect immediately
typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
