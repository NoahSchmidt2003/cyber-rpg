var i = 0;
var text = 'Serverraum AI-Control 14:00 Uhr';
var speed = 100; 

function nexthtml(){
    window.location.href='../html/end.html' 
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