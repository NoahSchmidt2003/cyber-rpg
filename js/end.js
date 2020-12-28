function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  }


var next_text = document.getElementById("next_text");
var server = document.getElementById("server");

function notes(){
    window.open("../html/notes.html","_blank");
    next_text.innerHTML = "Klicke auf dem Server um dich mit ihm zu verbinden";
    server.onclick = connect;
}

function connect(){
    window.location.href = "../html/terminal.html";
}