function on() {
  console.log("Started");
  document.getElementById("rearlight").style.backgroundColor = "red";
  document.getElementById("headlight").style.backgroundColor = "yellow";
}

function off() {
  console.log("Stopped");
  document.getElementById("rearlight").style.backgroundColor = "white";
  document.getElementById("headlight").style.backgroundColor = "white";
}

// function enginestart(){
//     console.log("Hello World");
//     var audio = document.getElementById("audio");
//     audio.onplay();
// }
