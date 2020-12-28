
var element_hmain = document.getElementById("heading_main");
var element_button = document.getElementById("button");

function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  };
//Wilkommen zum Cyber-RPG

async function text_animation(){
    var text = ['W', 'Wi', 'Wil', 'Wilk', 'Wilko', 'Wikom', 'Wilkomm', 'Wilkomme', 'Wilkommen', 'Wilkommen ', 'Wilkommen z', 'Wilkommen zu', 'Wilkommen zum', 'Wilkommen zum C', 'Wilkommen zum Cyb', 'Wilkommen zum Cybe','Wilkommen zum Cyber','Wilkommen zum Cyber-','Wilkommen zum Cyber-R','Wilkommen zum Cyber-RP','Wilkommen zum Cyber-RPG'];
    element_hmain.innerHTML = "";
    for (let i=0; i < 21; i++){
        element_hmain.innerHTML = text[i];
        await sleep(100);
    }
};

async function button_animation(){
    var text = ["-/-+# -*+#","+--*/ *+--","!+-#/ +-+/","!!-+- -+-*","-**-# -/-*","-#+!- !-#-",];
    for (let i=0; i < 5; i++){
        element_button.innerHTML = text[i];
        await sleep(200);
    }
    element_button.innerHTML = "Start Game";
};


setInterval( function animation(){
    var min = Math.ceil(0);
    var max = Math.floor(4);
    rdm_number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rdm_number);
    if(rdm_number == 0){
        element_hmain.style.color = "green";
        element_hmain.innerHTML = "Wilkommen zum Cyber-RPG";
    }
    if(rdm_number == 1){
        element_hmain.style.color = "blue";
        element_hmain.innerHTML = "Wilkommen zum Cyber-RPG";
    }
    if(rdm_number == 2){
        text_animation();

    }
    if(rdm_number == 3){
        element_hmain.style.color = "red";
        element_hmain.innerHTML = "Wilkommen zum Cyber-RPG";
    }
    if(rdm_number == 4){
        button_animation();
    }
},2000);


