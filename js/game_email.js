var box = document.getElementById("next_text");
var box_bg = document.getElementById("box_bg");
var next_btn = document.getElementById("next_btn");
var dekstop = document.getElementById("desktop");
var email_logo = document.getElementById("email_logo")
var email_client = document.getElementById("email_client");
var x_button = document.getElementById("x_button");
var square_button = document.getElementById("square_button");
var minus_button = document.getElementById("minus_button");
var email1 = document.getElementById("new_email1");
var email2 = document.getElementById("new_email2");
var email3 = document.getElementById("new_email3");
var email1text = document.getElementById("email_text1");
var read = false;
var paih1 = document.getElementById("paih1");
var virus_icon = document.getElementById("virus_icon");
var aihci1 = document.getElementById("aihci1");
var aihci2 = document.getElementById("aihci2");
var aihci_button = document.getElementById("aihci");
var aihci_div = document.getElementById("aihci_menu_div");
var container = document.getElementById("container");
var dest1 = document.getElementById("AI");
var dest2 = document.getElementById("home");
var aihci_nav_done = document.getElementById("nav_done");
var maps_div = document.getElementById("googol_maps_div");

var count = 0;
var virus = true;
function next(){
    if(count == 0){
        box.innerHTML = "Du stehst wie gewöhnlich auf.";
    }
    else if(count == 1){
        box.innerHTML = "Wie üblich checkst du kurz auf deinem PC die neuesten Emails.";
        dekstop.style.visibility = "visible";
        email_logo.style.visibility = "visible";
    }
    else if(count == 2 ){
        box_bg.style.backgroundColor = "green";
        box.innerHTML = "Clicke auf das Email Logo."
        next_btn.style.visibility = "hidden";
    }

    else if(count == 3){
        box_bg.style.backgroundColor = "green";
        box.innerHTML = "Öffne die Email von lookinside@cryptomail.com"
        next_btn.style.visibility = "hidden";
    }

    else if(count == 4){
        box.innerHTML = "Nein die Apokalypse geht los die AI von AI Control gerät außer Kontrolle.";
    }
    
    else if(count == 5){
        box.innerHTML = "Shit, vielleicht bin ich auch infiziert.";
    }

    else if(count == 6){
        box_bg.style.backgroundColor = "green";
        box.innerHTML = "Öffne das AIHCI Menü und öffne das Antivirenprogramm";
        next_btn.style.visibility = "hidden";

    }
    else if(count == 7){
        aihci_button.style.visibility = "hidden";
        box.innerHTML = "Ich kenne die Architektur unserer Rechner, alles was ich machen muss, ist durch den Zentral Rechner die AI zu flashen.";
    }

    else if(count == 8){
       box.innerHTML = "Ich muss jetzt handeln, bevor es zu spät ist.";
    }

    else if(count = 9){
        box_bg.style.backgroundColor = "green";
        box.innerHTML = "Lass dir eine Route mit googol Karten generieren zu AI Control. (Öffne AIHCI)";
        next_btn.style.visibility = "hidden";
        aihci_button.style.visibility = "visible";

    }
    count = count + 1
}

function email(){
    box_bg.style.backgroundColor = "#303030"
    box.innerHTML = "E-Mail Client geöffnet.";
    email_client.style.visibility = "visible";
    x_button.style.visibility = "visible";
    square_button.style.visibility = "visible";
    minus_button.style.visibility = "visible";
    email1.style.visibility = "visible";
    email2.style.visibility = "visible";
    email3.style.visibility = "visible";
    box.innerHTML = "Doch irgendwas ist komisch, sehr komisch eine neue E-Mail von lookinside@cryptomail.com.";
    next_btn.style.visibility = "visible";

}

function close_email(){
    email_client.style.visibility = "hidden";
    x_button.style.visibility = "hidden";
    square_button.style.visibility = "hidden";
    minus_button.style.visibility = "hidden";
    email1.style.visibility = "hidden";
    email2.style.visibility = "hidden";
    email3.style.visibility = "hidden";
    email1text.style.visibility = "hidden";
    if(read == true){
        dekstop.src = "../img/monitor_virus.png";
        email_logo.style.visibility = "hidden";
        box_bg.style.backgroundColor = "#303030"
        box.innerHTML = "Oh nein der PC hat den Virus der AI bekommen.";
        paih1.play();
        next_btn.style.visibility = "visible";
        aihci_button.style.visibility = "visible";
    }
}

function max_email(){
    email_client.style.right = "-21%";
    email_client.style.height = "30%";
    email_client.style.width = "65%"

    x_button.style.right = "11%";
    x_button.style.top = "35%";

    square_button.style.right = "14%";
    square_button.style.top = "35%";

    minus_button.style.right = "17%";
    minus_button.style.top = "35%";

    email1.style.width = "55%";
    email1.style.right = "17%";

    email2.style.width = "55%";
    email2.style.right = "17%";

    email3.style.width = "55%";
    email3.style.right = "17%";

    email1text.style.fontSize = "75%";
    email1text.style.top = "33%";
    email1text.style.right = "25%";

}

function min_email(){
    email_client.style.right = "";
    email_client.style.height = "";
    email_client.style.width = "";

    x_button.style.right = "";
    x_button.style.top = "";

    square_button.style.right = "";
    square_button.style.top = "";

    minus_button.style.right = "";
    minus_button.style.top = "";

    email1.style.width = "";
    email1.style.right = "";

    email2.style.width = "";
    email2.style.right = "";

    email3.style.width = "";
    email3.style.right = "";

    email1text.style.fontSize = "";
    email1text.style.top = "";
    email1text.style.right = "";
}

function email1_text(){
    read = true;
    email1text.style.visibility = "visible";
    email1.style.visibility = "hidden";
    email2.style.visibility = "hidden";
    email3.style.visibility = "hidden";
    box.innerHTML = "Sobald du fertig mit dem Lesen bist schließe das Programm.";
    next_btn.style.visibility = "hidden";
}

function fun_aihci_menu(){
    container.style.display = "none";
    aihci_div.style.display = "block";
    aihci1.play();

}

function antivirus(){
    box.innerHTML = "";
    alert("Antivirus geöffnet")
    aihci2.play();
    virus = false;
}

function close_aihci(){
    if(virus == true){
        window.location.href = '../html/gameover.html';
    }
    container.style.display = "";
    aihci_div.style.display = "";
    next_btn.style.visibility = "visible";
    box_bg.style.backgroundColor = "#303030";
    box.innerHTML = "Ich bin der Einzige der sie noch aufhalten kann.";
    
}

function googol_maps(){
    container.style.display = "none";
    aihci_div.style.display = "";
    maps_div.style.display ="block";

}

function navigate(){
    var dest1_c = dest1.checked;
    var dest2_c = dest2.checked;
    if(dest1_c == true){
        window.location.href = '../html/nav_done.html';
        alert("Route wird berechnet")
        

    }
    if(dest2_c == true){
        alert("Du Scherzkeks!!");
    }
}
function close_nav(){
    container.style.display = "block";
    aihci_div.style.display = "";
    maps_div.style.display ="";
}

