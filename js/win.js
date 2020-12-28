var element_hmain = document.getElementById("heading_main");


function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  };

setInterval( async function animation(){
    var min = Math.ceil(0);
    var max = Math.floor(7);
    rdm_number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rdm_number);
    if(rdm_number == 0){
        element_hmain.style.color = "green";
    }
    if(rdm_number == 1){
        element_hmain.style.color = "blue";
    }
    if(rdm_number == 2){
        element_hmain.style.color = "yellow";
    }
    if(rdm_number == 3){
        element_hmain.style.color = "red";
    }
    if(rdm_number == 4){
        element_hmain.style.color = "orange";
    }
    if(rdm_number == 5){
        element_hmain.style.color = "lime";
    }
    if(rdm_number == 6){
        element_hmain.style.color = "DarkRed";
    }
    if(rdm_number == 7){
        element_hmain.style.color = "YellowGreen";
    }
},500);


