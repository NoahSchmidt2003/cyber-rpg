var box = document.getElementById("next_text");
var box_bg = document.getElementById("box_bg");
var next_btn = document.getElementById("next_btn");
var cyborg_1 = document.getElementById("cyborg_1");
var cyborg_2 = document.getElementById("cyborg_2");
var cyborg_3 = document.getElementById("cyborg_3");
var cyborg_4 = document.getElementById("cyborg_4");
var container = document.getElementById("container");
var aihci_div = document.getElementById("aihci_menu_div");
var aihci1 = document.getElementById("aihci1");
var aihci = document.getElementById("aihci");
var cyborg = document.getElementById("cyborg");
var cyborg_explode = document.getElementById("cyborg_explode");
var alarm = document.getElementById("alarm");
var chest_drops_div = document.getElementById("chest_drops");
var drop = document.getElementById("drop");
var drop_text = document.getElementById("drop_text");
var chest_open = document.getElementById("chest_open");
var lootbox = document.getElementById("lootbox");
var cyborg_approching = document.getElementById("cyborg_approching");
var cyborg_warning = document.getElementById("warning_cyborg");
var end = document.getElementById("end");
var count = 0;

function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  };

function next(){
    if(count == 0){
        box_bg.style.background = "blue";
        box.innerHTML = "...";
        cyborg_1.play();
    }

    else if(count == 1){
        box_bg.style.background = "#303030";
        box.innerHTML = "Ich bin Elliot und arbeite als Admin hier.";
    }

    else if(count == 2){
        box_bg.style.background = "blue";
        box.innerHTML = "...";
        cyborg_2.play();
    }

    else if(count == 3){
        box_bg.style.background = "#303030";
        box.innerHTML = "Das kann nicht sein.";
    }
    else if(count == 4){
        box_bg.style.background = "blue";
        box.innerHTML = "...";
        cyborg.src = "../img/cyborg_angry.png";
        cyborg_3.play();
    }
    else if(count == 5){
        box_bg.style.background = "#303030";
        box.innerHTML = "Ich kenne dieses Modell, das müsste x10ab sein.";
    }
    else if(count == 6){
        box_bg.style.background = "#303030";
        box.innerHTML = "Für dieses Modell habe ich ein Zeroday exploit über Bluetooth.";
    }
    else if(count == 7){
        box_bg.style.background = "green";
        box.innerHTML = "Öffne den Exploit und aktiviere ihn.";
    }
    else if(count == 8){
        box_bg.style.background = "green";
        box.innerHTML = "Gehe dafür ins AHCI Menü und wähle hack aus.";
        aihci.style.visibility = "visible";
        next_btn.style.visibility = "hidden";
    }

    else if(count == 9){
        box.innerHTML = "Jetzt weiß jeder von diesen Bots, dass ich hier bin.";
    }

    else if(count == 10){
        box_bg.style.background = "green";
        box.innerHTML = "Schnappe dir schnell die Lootkiste vom Cyborg.";
        next_btn.style.visibility = "hidden";
    }
    count = count + 1
}

function fun_aihci_menu(){
    container.style.display = "none";
    aihci_div.style.display = "block";
    aihci1.play();

}

function close_aihci(){
    container.style.display = "";
    aihci_div.style.display = "";
    next_btn.style.visibility = "visible";
    box_bg.style.backgroundColor = "#303030";
    box.innerHTML = "Ich bin der Einzige der sie noch aufhalten kann.";
    
}

async function hack(){
    aihci.style.visibility = "";
    container.style.display = "";
    aihci_div.style.display = "";
    next_btn.style.visibility = "visible";
    box_bg.style.backgroundColor = "#303030";
    box.innerHTML = "Scheiße seit wann ist das Antiviren Programm so gut mist.";
    cyborg_4.play();
    await sleep(10000);
    cyborg.src = "../img/cyborg_explode.png";
    cyborg_explode.play();
    lootbox.style.visibility = "visible";
    await sleep(2000);
    alarm.play();



}

async function chest(){
    chest_open.play();
    await sleep(1500);
    container.style.display = "none";
    aihci_div.style.display = "";
    chest_drops_div.style.display = "block";
    chest_drops_div.style.backgroundColor = "#a6a6a6";
    await sleep(2500);
    drop.src = "../img/emp.png";
    drop_text.innerHTML = "EMP";
    await sleep(2500);
    drop.src = "../img/heal.png";
    drop_text.innerHTML = "Medkit";
    await sleep(2500);
    drop.src = "../img/shield.png"
    drop_text.innerHTML = "Schild";

}

async function close_chest(){
    aihci_div.style.display = "";
    chest_drops_div.style.display = "";
    container.style.display = "";
    box.innerHTML = "Jetzt wird das ein endloser Kampf, ob ich das schaffe.";
    box_bg.style.backgroundColor = "#303030";
    next_btn.style.visibility = "hidden";
    await sleep(4000);
    container.style.display = "none";
    end.style.display = "block";
    cyborg_approching.play();
    await sleep(16000);
    cyborg_warning.play();
    await sleep(7000);
    window.location.href = '../html/combat_system.html';


}