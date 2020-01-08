var txt = "Hope you enjoyed my work !"
var container = document.querySelector("#writer p")
var count = 0;
var speed = 100;

function typewriter() {
  if (count < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(count);
    count++;
    setTimeout(typewriter, speed);
  } else{
    document.getElementById("greeting").innerHTML = "";
    count = 0;
    typewriter()
  }
}

window.onload = typewriter()
// have a js file "onload"
// onload is a function

window.onload = function(){
  typewriter()
}

// save it to another file
