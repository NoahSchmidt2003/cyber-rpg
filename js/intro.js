var i = 0;
var text = 'Du bist Elliot und 24 Jahre alt.Du bist Programmierer und IT-Administrator bei dem wohl gefürchtetsten Tech Unternehmen der Welt AIControl.AIControl steht vor dem Durchbruch eine Super Intelligenz zu entwickeln.Doch wie ist das möglich Quantencomputer sind zum Standard geworden und AIs werden mit jedem Tag besser.Zudem hat sich die Welt digitalisiert jeder Mensch trägt einen Chip im Kopf und alles ist Smart miteinander verbunden.';
var speed = 60; 
var audio = document.getElementById('sound');
var audio_load = document.getElementById('sound_load');
audio_load.pause();

function nexthtml(){
    window.location.href='../html/game_intro.html' 
}

function progress() {
    i = 0
    if (i == 0) {
      i = 1;
      var bar = document.getElementById("bar");
      var pb = document.getElementById("progressbar");
      var text_load = document.getElementById("text_load");
      bar.style.visibility = "visible";
      pb.style.visibility = "visible";
      text_load.style.visibility = "visible";
      var width = 1;
      var id = setInterval(frame, 100);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          nexthtml();
        } else {
          width++;
          bar.style.width = width + "%";
        }
      }
    }
  } 

function typeWriter() {
    if (i < text.length) {
        if(text.charAt(i) == "."){
            document.getElementById("writer").innerHTML += text.charAt(i) + "<br>";
        }
        else{
            document.getElementById("writer").innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
  }
  
    else{
        audio.pause();
        audio_load.play();
        progress();
    }
}
function pause() {
    audio.pause();
}



typeWriter();
 