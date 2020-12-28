var i = 0;
var text = 'Frankfurt – 2090 6:00 Uhr';
var speed = 120; 

function nexthtml(){
    window.location.href='../html/game_email.html' 
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
        nexthtml();
    }
}

typeWriter();