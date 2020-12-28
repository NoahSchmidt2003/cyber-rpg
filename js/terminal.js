var i = 0;
var text = 'Loading AI-Control Server.';
var speed = 60; 
var output = document.getElementById("output");
var input = document.getElementById("input");
var p_input = document.getElementById("p_input");
var input_text = "";
var commandpw = 0;
var username = "";
var directory = "none"
var directory2 = "none";
var input_save = "<input type='text' id='input' class='input' autofocus>";
var PAIH = "PAIH.py ";
var config = "config.yml ";
var logs = "logs.log ";
var backup = "backup.py";


function sleep(time) {
    return new Promise( resolver => setTimeout(resolver, time));
  }



async function fun_boot(){
    
    for(let i = 0; i<2; i++){
    output.innerHTML = "Loading AI-Control Server .";
    await sleep(10);
    output.innerHTML = "Loading AI-Control Server ..";
    await sleep(10);
    output.innerHTML = "Loading AI-Control Server ...";
    await sleep(10);
    output.innerHTML = "Loading AI-Control Server ....";
    await sleep(10);
    }
}

function typeWriter() {
    if (i < text.length) {
        if(text.charAt(i) == "."){
            output.innerHTML += "<br>";
        }
        else{
            output.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
  }

}

async function process(){
    typeWriter();
    await sleep(3500);
    i = 0;
    fun_boot();
    await sleep(100);
    output.innerHTML = "";
    text = "Debian 50 LTS.Username and password required.Access blocked.";
    typeWriter();
    await sleep(5000);
    i = 0;
    output.innerHTML = ""
    text = "Enter username:.";
    typeWriter();
}

async function process2(){
    i = 0;
    output.innerHTML = ""
    text = "Enter password:."
    typeWriter();
    
}

async function pw_check(){
    if(username != "elliot" || password != "elliot_the_admin_2090"){
        output.innerHTML = "";
        i = 0;
        text = "password or username incorrect the entire system is now encrypted.Please contact an admin.";
        typeWriter();
        await sleep(8000);
        window.location.href= "../html/gameover.html";
    }else{
        output.innerHTML = "";
        i = 0;
        text = "Login successful..Last login: Wed Dec 6 2090 12:25:02..Welcome to Debian 50 LTS (GNU/Linux 15 02 0-38-generic x86_64)..System information as of Thu Dec 7 2090 14:22:15.Sytem load: 95.Usage of /: 90% of 250YB.Memory usage: 55%.";
        typeWriter();
        await sleep(15000);
        text = "Login successful<br><br>Last login: Wed Dec 6 2090 12:25:02<br><br>Welcome to Debian 50 LTS (GNU/Linux 15.02.0-38-generic x86_64)<br><br>System information as of Thu Dec 7 2090 14:22:15<br>Sytem load: 95%<br>Usage of /: 90% of 250YB<br>Memory usage: 55%<br>"

        p_input.innerHTML = "root@AI-Control:/# " + input_save;
        
        
    }
}

function fun_ls(){
    if(directory == "none"){
        text = text + "root@AI-Control:/# ls<br>home root sys<br>";
        output.innerHTML = text;

    }
    else if(directory == "home" && directory2 == "none"){
        text = text + "root@AI-Control:/home# ls<br>PAIH<br>"
        output.innerHTML = text;
    }else if(directory == "home" && directory2 == "PAIH"){
        text = text + "root@AI-Control:/home/PAIH# ls<br>"+ PAIH +  config +  logs +  backup + "<br>"
        output.innerHTML = text;

    }else{
        text = text + "bash: cd: root: No such file or directory<br>";
        output.innerHTML = text;
    }
    
}

function fun_cd_home(){
    if(directory2 == "none"){
        directory = "home";
        text = text + "root@AI-Control:/# cd home<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/home# " + input_save;
    }else{
        text = text + "bash: cd: home: No such file or directory<br>";
        output.innerHTML = text;
    }
}

function fun_cd_root(){
    if(directory2 == "none"){
        directory = "root";
        text = text + "root@AI-Control:/# cd root<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/root# " + input_save;
    }else{
        text = text + "bash: cd: root: No such file or directory<br>";
        output.innerHTML = text;
    }
}

function fun_cd_sys(){
    if(directory2 == "none"){
        directory = "sys";
        text = text + "root@AI-Control:/# cd root<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/sys# " + input_save;
    }else{
        text = text + "bash: cd: sys: No such file or directory<br>";
        output.innerHTML = text;
    }
}

function fun_PAIH(){
    if(directory == "home"){
        directory2 = "PAIH";
        text = text + "root@AI-Control:/home# cd PAIH<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/home/PAIH# " + input_save; 
    }else{
        text = text + "bash: cd: PAIH: No such file or directory<br>";
        output.innerHTML = text;
    }
}

function fun_cd_back(){
    if(directory2 == "PAIH"){
        directory2 = "none";
        directory = "home";
        text = text + "root@AI-Control:/home/PAIH# cd ..<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/home# " + input_save;

    }else if(directory == "home" && directory2 == "none"){
        directory2 = "none";
        directory = "none";
        text = text + "root@AI-Control:/home/# cd ..<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/# " + input_save;
    }else if(directory == "sys" || directory == "root" && directory2 == "none"){
        directory2 = "none";
        directory = "none";
        text = text + "root@AI-Control:/home/# cd ..<br>";
        output.innerHTML = text;
        p_input.innerHTML = "root@AI-Control:/# " + input_save;
    }
}

function rm_PAIH(){
    if(directory == "home" && directory2 == "PAIH"){
        text = text + "root@AI-Control:/home/PAIH/# rm PAIH.py<br>";
        PAIH = "";
        output.innerHTML = text;
    }else{
        text = text + "bash: rm: PAIH.py: No such file or directory<br>";
        output.innerHTML = text;
    }
}

async function gameover(){
    text = text + "<Error> My name is PAIH I'm watching what you're doing<br>";
    output.innerHTML = text;
    await sleep(1500);
    window.location.href = "../html/gameover.html";
}

async function fun_reboot(){
    if(PAIH == ""){
        text = text + "root@AI-Control:/home/PAIH/# reboot<br>reboot sucessfully";
        output.innerHTML = text;
        await sleep(2500);
        window.location.href = "../html/win.html";
    }else{
        gameover();
    }
}


p_input.addEventListener("keyup", async function(event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        input = document.getElementById("input");
        input_text = input.value;
        input.value = "";
        if(input_text == "ls"){
            fun_ls();
        }
        else if(input_text == "cd home"){
            fun_cd_home();
        }
        else if(input_text == "cd PAIH"){
          fun_PAIH();
        }else if(input_text == "cd root"){
            fun_cd_root();
        }else if(input_text == "cd sys"){
            fun_cd_sys();
        }
        else if(input_text == "cd .."){
            fun_cd_back();
        }
        else if(input_text == "rm PAIH.py"){
            rm_PAIH();
        }else if(input_text == "rm config.yml" ||  input_text == "rm logs.log" || input_text == "rm backup.py"){
            if(directory == "home" && directory2 == "PAIH"){
                gameover();
            }else{
                text = text + "bash: rm: No such file or directory<br>";
                output.innerHTML = text;
            }
            
        }else if(input_text == "reboot"){
            fun_reboot();
        }

        
      if(commandpw == 0){
        output.innerHTML = "Enter username:<br><br>" + input_text;
        username = input_text;
        commandpw = commandpw + 1;
        await sleep(1500);
        process2();
        
      }else if(commandpw == 1){
        output.innerHTML = "Enter password:<br><br>" + input_text;
        password = input_text;
        commandpw = commandpw + 1;
        await sleep(1500);
        pw_check();
      }

      
      
    }
});


process();



 