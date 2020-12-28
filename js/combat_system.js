var enemy_bar = document.getElementById("enemy_bar");
var elliot_bar = document.getElementById("elliot_bar");
var elliot_shield = document.getElementById("elliot_shield");

var emp_pistol = document.getElementById("emp_pistol");
var emp = document.getElementById("emp");
var medkit = document.getElementById("heal");
var shield = document.getElementById("shield");

var boost = document.getElementById("boost");

var cyborg = document.getElementById("cyborg");

var info_text = document.getElementById("info_text");
var text_medkit_amount = document.getElementById("amount_medkit");
var text_shield_amount = document.getElementById("amount_shield");

var chest_drops_div = document.getElementById("chest_drops");
var drop = document.getElementById("drop");
var drop_text = document.getElementById("drop_text");

var container = document.getElementById("container");

var pistol_sound = document.getElementById("pistol_sound");
var pistol_sound2 = document.getElementById("pistol_sound2");
var rifle_sound1 = document.getElementById("rifle_sound1");
var rifle_sound2 = document.getElementById("rifle_sound2");
var emp_sound = document.getElementById("emp_sound");

var onclick_emp_pistol = emp_pistol.onclick;
var onclick_emp = emp.onclick;
var onclick_medkit = medkit.onclick;
var onclick_shield = shield.onclick;

var medkit_amount = 1;
var shield_amount = 1;

var health_elliot_max = 400;
var health_cyborg_max = 100;
var shield_max = 300;
var shield_val = 300;
var health_elliot = 400;
var health_cyborg = 100;
var atk_emp_pistol = 50;
var atk_cyborg = 25;
var percent = 0;
var multiplier = 1;
var round = 1;
var emp_count = 0;
var emp_var = 1;
var emp_round = 0;
var chest_random = 0;
var chest_random_amount = 0;
var have_rifle = false;
var random_sound_weapon = 0;

function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  }

function get_random_Int(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function update_consumables(){
    text_medkit_amount.innerHTML = medkit_amount;
    text_shield_amount.innerHTML = shield_amount;
    if(medkit_amount > 0){
        medkit.onclick = onclick_medkit;
        medkit.style.opacity = "100%";
    }
    if(shield_amount > 0){
        shield.style.opacity = "100%";
        shield.onclick = onclick_shield;
    }
    

}


function chest(){
    chest_drops_div.style.display = "block";
    container.style.display = "none";
    chest_random = get_random_Int(2);
    if(round == 5){
        chest_random = 10;
    }
    if(chest_random == 0){
        drop.src = "../img/heal.png";
        chest_random_amount = get_random_Int(3);
        chest_random_amount = chest_random_amount + 1;
        medkit_amount = medkit_amount + chest_random_amount;
        drop_text.innerHTML = "Medkit " + chest_random_amount + "x";
    }
    else if(chest_random == 10){
        drop.src = "../img/Plasma_Rifle.png";
        drop_text.innerHTML = "Plasma_Rifle";
        atk_emp_pistol = atk_emp_pistol * 4;
        emp_pistol.src = "../img/Plasma_Rifle.png";
        emp_pistol.title = "Ein seltenes Gewehr, welches mit der Kraft von Plasma arbeitet"
        have_rifle = true;
    }
    else{
        drop.src = "../img/shield.png";
        chest_random_amount = get_random_Int(3);
        chest_random_amount = chest_random_amount + 1;
        shield_amount = shield_amount + chest_random_amount;
        drop_text.innerHTML = "Shild " + chest_random_amount + "x";
       
    }
    chest_drops_div.style.visibility = "visible";
    update_consumables();
    

}
function close_chest(){
    chest_drops_div.style.display  = "none";
    container.style.display = "block";
}

async function cyborg_atk(){
    if(emp_count > 0){
        emp_count = emp_count - 1;
        emp_var = 0;
    }
    if(emp_count == 0){
        emp_var = 1;
    }
    if(health_cyborg <= 0){
        multiplier = multiplier + 0.5;
        round = round + 1;
        emp_count = 0;
        emp_var = 1;
        info_text.innerHTML = "Cyborg besiegt";
        info_text.style.visibility = "visible";
        cyborg.src = "../img/cyborg_dead.png";
        await sleep(2000);
        cyborg.src = "../img/cyborg_angry.png";
        chest();
        info_text.style.visibility = "hidden";
        if(round == 10){
            cyborg.src = "../img/cyborg_dead.png";
            info_text.innerHTML = "Du hast alle Cyborgs erfolgreich besiegt.";
            info_text.style.visibility = "visible";
            await sleep(2500);
            window.location.href = "../html/end_intro.html";
        }else{
            boost.innerHTML = "Boost: " + multiplier;
            health_cyborg_max = 100 * multiplier;
            atk_cyborg = 25 * multiplier;
            health_cyborg = health_cyborg_max
            enemy_bar.style.width = "100%";
            emp_pistol.onclick = onclick_emp_pistol;
            medkit.onclick = onclick_medkit;
            shield.onclick = onclick_shield;
            emp.onclick = onclick_emp;
        }
    }else{
        if(emp_var == 1){
            await sleep(500);
            info_text.innerHTML = "Eingehender Angriff";
            info_text.style.visibility = "visible";
            pistol_sound2.play();
            await sleep(2500);
            info_text.style.visibility = "hidden";
        }
        atk_cyborg2 = atk_cyborg * emp_var
        if(atk_cyborg2 == 0){
            p = health_elliot_max / 100;
            percent = health_elliot / p;
        }
        else if(shield_val >= atk_cyborg){
            shield_val = shield_val - atk_cyborg;
            p = shield_max / 100;
            percent = shield_val / p;
            percent = percent + "%";
            elliot_shield.style.width = percent;
        }else if(shield_val > 0){
            health_elliot = health_elliot - atk_cyborg + shield_val;
            shield_val = 0;
            p = health_elliot_max / 100;
            percent = health_elliot / p;
            elliot_bar.style.width = percent;
            elliot_shield.style.width = shield_val;
        }else{
        health_elliot = health_elliot - atk_cyborg;
        p = health_elliot_max / 100;
        percent = health_elliot / p;
        }
        if(percent <= 0){
            percent = 0;
            info_text.innerHTML = "Gameover";
            info_text.style.color = "red";
            info_text.style.visibility = "visible";
            await sleep(2000);
            info_text.style.visibility = "hidden";
            location.reload();
        }
        percent = percent + "%";

        elliot_bar.style.width = percent;
        emp_pistol.onclick = onclick_emp_pistol;
        if(medkit_amount == 0){
            medkit.style.opacity = "40%";
        }else{
            medkit.onclick = onclick_medkit;
        }
        if(shield_amount == 0){
            shield.style.opacity = "40%";
        }else{
            shield.onclick = onclick_shield;
        }
        
        
        emp.onclick = onclick_emp;
    }

}
async function fun_emp_pistol(){
    emp_pistol.onclick = null;
    medkit.onclick = null;
    shield.onclick = null;
    emp.onclick = null;
    if(have_rifle == true){
        random_sound_weapon = get_random_Int(2);
        if(random_sound_weapon == 0){
            rifle_sound1.play();
            await sleep(2500);
        }else{
            rifle_sound2.play();
            await sleep(5500);
        }
    }else{
        pistol_sound.play();
        await sleep(2500);
    }
    p = health_cyborg_max / 100;
    health_cyborg = health_cyborg - atk_emp_pistol;
    percent = health_cyborg / p;
    if(percent < 0){
        percent = 0;
    }
    percent = percent + "%";
    enemy_bar.style.width = percent;
    cyborg_atk();

}

function fun_medkit(){
    emp_pistol.onclick = null;
    medkit.onclick = null;
    shield.onclick = null;
    emp.onclick = null;
    health_elliot = health_elliot + 400;
    if(health_elliot > health_elliot_max){
        health_elliot = health_elliot_max;
    }
    p = health_elliot_max / 100;
    percent = health_elliot / p;
    percent = percent + "%";
    elliot_bar.style.width = percent;    percent = percent + "%";
    medkit_amount = medkit_amount - 1;
    update_consumables();
    cyborg_atk();
    
    

}

function fun_shield(){
    emp_pistol.onclick = null;
    medkit.onclick = null;
    shield.onclick = null;
    emp.onclick = null;
    p = shield_max / 100;
    shield_val = shield_val + 400
    percent = shield_val / p;
    if(shield_val > shield_max){
        percent = 100;
        shield_val = shield_max;
    }
    percent = percent + "%";
    elliot_shield.style.width = percent;
    shield_amount = shield_amount - 1;
    update_consumables();
    cyborg_atk();


}

async function fun_emp(){
    emp_pistol.onclick = null;
    medkit.onclick = null;
    shield.onclick = null;
    emp.onclick = null;
    emp_var = get_random_Int(3);
    if(emp_var == 1){
        emp_count = 4;
        info_text.innerHTML = "EMP erfolgreich";
        info_text.style.visibility = "visible";
        await sleep(1500);
        info_text.style.visibility = "hidden";
    }else{
        emp_count = 0;
        info_text.innerHTML = "EMP Fehlgeschlagen";
        info_text.style.visibility = "visible";
        await sleep(1500);
        info_text.style.visibility = "hidden";
    }
    
    cyborg_atk();


}

