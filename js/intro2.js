var i = 0;
var text = 'Nordeingang AI-Control 9:00 Uhr';
var speed = 100; 

function nexthtml(){
    window.location.href='../html/first_fight.html' 
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