var canvas = document.getElementById("canvas"); //SE INICIALIZA EL CANVAS
var ctx = canvas.getContext("2d"); //SE INICIALIZA EL CONTEXTO DE CANVAS
var isStart = false; //BOOLEAN PARA VALIDAR EL INGRESO AL JUEGO
var isSelected = false; 

var english = null;

var background = new Image();


//ACTIVADORES DE PISTAS
var pista1 = false;
var pista2 = false;
var pista3 = false;
var pista4 = false;
var pista5 = false;
var pista6 = false;


var centesimas = 60;
var segundos = 60;
var minutos = 5;

var reloj = null;

//window.addEventListener("load",init);


//MÉTODO QUE INICIALIZA EL JUEGO
function init(){
    
    background.src = "Assets/sprites/img/BG_BombChase_320x200px_Flateado-min.png"; 
    
    //VALIDACIÓN PARA QUE DIBUJE LA IMAGEN EL CANVAS SOLO CUANDO LA IMAGEN SE CARGUE
    background.onload = function(){
        ctx.drawImage(background,0,-15);
    }
    
    
    pista0(); //SE ACTIVA LA PRIMERA PISTA
    
     reloj = setInterval(cronometro,10);
}



//CONDICIÓN PARA ACTIVAR LOS EVENTOS DE CLICK EN UNA RESOLUCIÓN DE DESKTOP
if(screen.width >= 1024){
    
   
//SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    
    if((mouseX >= 211 && mouseX <= 268) && (mouseY > 194 && mouseY < 350) && isStart){
         
        if(english){
            alert("Suspicious: I just left that heavy backpack where they asked me while the traveler 'distracted the police'");
        }
        else{
            alert("Sospechoso: yo solo dejé esa pesada mochila donde me lo pidieron mientras el viajero 'distraía a la policía'");
        }
        
        textoPista1();
    }
    
    
    if((mouseX >= 643 && mouseX <= 740) && (mouseY > 448 && mouseY < 629) && isStart){
        
        if(pista1){
            if(english){
            alert('Traveler: "You can never capture us, we have a photographer falsifying clues"');
        }
        else{
            alert('Viajero: "Tú nunca nos atraparas, tenemos a un fotografo falsificando todo"');
        }
        
        textoPista2();
        }
    }
    
    
    //SOSPECHOSO 5
    if((mouseX >= 107 && mouseX <= 166) && (mouseY > 120 && mouseY < 262) && isStart){
        
        if(pista2){
            
            if(english){
               alert('Photographer: "a romantic sign will start the big countdown"');
            }else{
                alert('Fotógrafo: “una romántica señal dará el inicio a la gran cuenta regresiva”');
            }
        
             textoPista4();
        }
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 165 && mouseX <= 223) && (mouseY > 430 && mouseY < 573) && isStart){
        
        if(pista4){
            
            if(english){
                alert('In love: "Its too late, the boss is a master of disguise and while escaping activated the mechanism"');
            }
            else{
               alert('Enamorados: “es muy tarde, el jefe es un maestro del disfraz y mientras escapa activó el mecanismo”');
            } 
        
             textoPista5();
        }
    }
    
    
    //TERRORISTA
    if((mouseX >= 35 && mouseX <= 99) && (mouseY > 244 && mouseY < 376) && isStart){
        
        if(pista5){
            
            if(english){
            
               alert('Boss: "But how? Sooner or later you will know about me ...');
            }
            else{
               alert('Jefe: “¿Pero cómo? Tarde o temprano volverás a saber de mi… ');
            }
        }
        
        //SE CAMBIA LA PANTALLA A GAME OVER
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 30px Consolas";
        ctx.fillText("YOU WIN!!",50,50);
        clearInterval(reloj);
    }
    
    
},false);
    
   
} //PARA RESOLUCIÓN MEDIANA
else if(screen.width >= 768){
        
    
    //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    
    
    if((mouseX >= 105 && mouseX <= 161) && (mouseY > 96 && mouseY < 210) && isStart){
         
        if(english){
            alert("Suspicious: I just left that heavy backpack where they asked me while the traveler 'distracted the police'");
        }
        else{
            alert("Sospechoso: yo solo dejé esa pesada mochila donde me lo pidieron mientras el viajero 'distraía a la policía'");
        }
        
        textoPista1();
    }
    
    
     if((mouseX >= 347 && mouseX <= 424) && (mouseY > 268 && mouseY < 354) && isStart){
        
         if(pista1){
            if(english){
            alert('Traveler: "You can never capture us, we have a photographer falsifying clues"');
        }
        else{
            alert('Viajero: "Tú nunca nos atraparas, tenemos a un fotografo falsificando todo"');
        }
        
        textoPista2();
        }
         
    }
    
   
    //SOSPECHOSO 5
    if((mouseX >= 52 && mouseX <= 96) && (mouseY > 63 && mouseY < 147) && isStart){
        
        if(pista2){
            
            if(english){
               alert('Photographer: "a romantic sign will start the big countdown"');
            }else{
                alert('Fotógrafo: “una romántica señal dará el inicio a la gran cuenta regresiva”');
            }
        
             textoPista4();
        }
    }
    
    
    //SOSPECHOSO 7
    if((mouseX >= 94 && mouseX <= 140) && (mouseY > 243 && mouseY < 327) && isStart){
        
        if(pista4){
            
            if(english){
                alert('In love: "Its too late, the boss is a master of disguise and while escaping activated the mechanism"');
            }
            else{
               alert('Enamorados: “es muy tarde, el jefe es un maestro del disfraz y mientras escapa activó el mecanismo”');
            } 
        
             textoPista5();
        }
    }
    
    //TERRORISTA
    if((mouseX >= 9 && mouseX <= 58) && (mouseY > 132 && mouseY < 216) && isStart){
        
        if(pista5){
            
            if(english){
            
               alert('Boss: "But how? Sooner or later you will know about me ...');
            }
            else{
               alert('Jefe: “¿Pero cómo? Tarde o temprano volverás a saber de mi… ');
            }
        }
        
        //SE CAMBIA LA PANTALLA A GAME OVER
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 30px Consolas";
        ctx.fillText("YOU WIN!!!",50,50);
        clearInterval(reloj);
    }
    
    
},false);
    
    
} //PARA RESOLUCIONES PEQUEÑAS
else if(screen.width >= 360){
    
    
       //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    
    
    if((mouseX >= 47 && mouseX <= 79) && (mouseY > 50 && mouseY < 95) && isStart){
         
        if(english){
            alert("Suspicious: I just left that heavy backpack where they asked me while the traveler 'distracted the police'");
        }
        else{
            alert("Sospechoso: yo solo dejé esa pesada mochila donde me lo pidieron mientras el viajero 'distraía a la policía'");
        }
        
        textoPista1();
    }
    
    
     if((mouseX >= 160 && mouseX <= 197) && (mouseY > 121 && mouseY < 168) && isStart){
        
         if(pista1){
            if(english){
            alert('Traveler: "You can never capture us, we have a photographer falsifying clues"');
        }
        else{
            alert('Viajero: "Tú nunca nos atraparas, tenemos a un fotografo falsificando todo"');
        }
        
        textoPista2();
        }
    }
    

    
    //SOSPECHOSO 5
    if((mouseX >= 26 && mouseX <= 46) && (mouseY > 30 && mouseY < 70) && isStart){
        
        if(pista2){
            
            if(english){
               alert('Photographer: "a romantic sign will start the big countdown"');
            }else{
                alert('Fotógrafo: “una romántica señal dará el inicio a la gran cuenta regresiva”');
            }
        
             textoPista4();
        }
    }
    
    
    //SOSPECHOSO 7
    if((mouseX >= 48 && mouseX <= 63) && (mouseY > 112 && mouseY < 150) && isStart){
        
        if(pista4){
            
            if(english){
                alert('In love: "Its too late, the boss is a master of disguise and while escaping activated the mechanism"');
            }
            else{
               alert('Enamorados: “es muy tarde, el jefe es un maestro del disfraz y mientras escapa activó el mecanismo”');
            } 
        
             textoPista5();
        }
    }
    
    //TERRORISTA
    if((mouseX >= 6 && mouseX <= 30) && (mouseY > 63 && mouseY < 101) && isStart){
        
         if(pista5){
            
            if(english){
            
               alert('Boss: "But how? Sooner or later you will know about me ...');
            }
            else{
               alert('Jefe: “¿Pero cómo? Tarde o temprano volverás a saber de mi… ');
            }
        }
        
        //SE CAMBIA LA PANTALLA A GAME OVER
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 30px Consolas";
        ctx.fillText("YOU WIN!!!",50,50);
        clearInterval(reloj);
    }
    
    
},false);
    
    
} //PARA RESOLUCIONES MUY PEQUEÑAS
else if(screen.width >= 320){
    
    
    
       //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    
    
    if((mouseX >= 42 && mouseX <= 71) && (mouseY > 41 && mouseY < 86) && isStart){
         
        if(english){
            alert("Suspicious: I just left that heavy backpack where they asked me while the traveler 'distracted the police'");
        }
        else{
            alert("Sospechoso: yo solo dejé esa pesada mochila donde me lo pidieron mientras el viajero 'distraía a la policía'");
        }
        
        textoPista1();
    }
    
    
     if((mouseX >= 142 && mouseX <= 175) && (mouseY > 108 && mouseY < 145) && isStart){
        
         if(pista1){
            if(english){
            alert('Traveler: "You can never capture us, we have a photographer falsifying clues"');
        }
        else{
            alert('Viajero: "Tú nunca nos atraparas, tenemos a un fotografo falsificando todo"');
        }
        
        textoPista2();
        }
    }
    
    
    //SOSPECHOSO 5
    if((mouseX >= 22 && mouseX <= 43) && (mouseY > 28 && mouseY < 62) && isStart){
        
        if(pista2){
            
            if(english){
               alert('Photographer: "a romantic sign will start the big countdown"');
            }else{
                alert('Fotógrafo: “una romántica señal dará el inicio a la gran cuenta regresiva”');
            }
        
             textoPista4();
        }
    }
    
  
    
    //SOSPECHOSO 7
    if((mouseX >= 38 && mouseX <= 57) && (mouseY > 98 && mouseY < 134) && isStart){
        
        if(pista4){
            
            if(english){
                alert('In love: "Its too late, the boss is a master of disguise and while escaping activated the mechanism"');
            }
            else{
               alert('Enamorados: “es muy tarde, el jefe es un maestro del disfraz y mientras escapa activó el mecanismo”');
            } 
        
             textoPista5();
        }
    }
    
 
    
    //TERRORISTA
    if((mouseX >= 6 && mouseX <= 26) && (mouseY > 54 && mouseY < 91) && isStart){
        
        if(pista5){
            
            if(english){
            
               alert('Boss: "But how? Sooner or later you will know about me ...');
            }
            else{
               alert('Jefe: “¿Pero cómo? Tarde o temprano volverás a saber de mi… ');
            }
        }
        
        //SE CAMBIA LA PANTALLA A GAME OVER
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 30px Consolas";
        ctx.fillText("YOU WIN!!!!",50,50);
        clearInterval(reloj);
    }
    
    
},false);
        
}


console.log("Resolucion "+screen.width);



function pista0(){
    
        var parrafo = document.createElement("p");
        
        if(english){
            var texto = document.createTextNode('"An informant saw a man with a cap prowling the area nervously"');
       }else{
           var texto = document.createTextNode(' “Un informante vio a un hombre con gorra merodeando la zona de forma nerviosa”');
       }
        
        parrafo.appendChild(texto);
        document.getElementById("pista").appendChild(parrafo);
}



function textoPista1(){
    
    if(!pista1){
        
        document.getElementById("pista").removeChild(document.getElementsByTagName("p")[0]);
        
        var parrafo = document.createElement("p");
        
        if(english){
            var texto = document.createTextNode("Suspicious: I just left that heavy backpack where they asked me while the traveler 'distracted the police'");
       }else{
           var texto = document.createTextNode("Sospechoso: yo solo dejé esa pesada mochila donde me lo pidieron mientras el viajero 'distraía a la policía'");
       }
        
        parrafo.appendChild(texto);
        document.getElementById("pista").appendChild(parrafo);
    }
    
    pista1 = true;
    
}


function textoPista2(){
    
    if(!pista2){
        
        document.getElementById("pista").removeChild(document.getElementsByTagName("p")[0]);
        
        var parrafo = document.createElement("p");
        
        if(english){
            var texto = document.createTextNode('Traveler: "You can never capture us, we have a photographer falsifying clues"');
       }else{
           var texto = document.createTextNode('Viajero: "Nunca podrás capturarnos, tenemos a un fotografo falsificandolo todo"');
       }
        
        parrafo.appendChild(texto);
        document.getElementById("pista").appendChild(parrafo);
    }
    
    pista2 = true;
}




function textoPista4(){
    
      if(!pista4){
        
        document.getElementById("pista").removeChild(document.getElementsByTagName("p")[0]);
        
        var parrafo = document.createElement("p");
        
        if(english){
            var texto = document.createTextNode('Photographer: "a romantic sign will start the big countdown"');
       }else{
           var texto = document.createTextNode('Fotógrafo: “una romántica señal dará el inicio a la gran cuenta regresiva”');
       }
        
        parrafo.appendChild(texto);
        document.getElementById("pista").appendChild(parrafo);
    }
    
    pista4 = true;
    
}

function textoPista5(){
    
    if(!pista5){
        
        document.getElementById("pista").removeChild(document.getElementsByTagName("p")[0]);
        
        var parrafo = document.createElement("p");
        
        if(english){
            var texto = document.createTextNode('Lovers: "Its too late, the boss is a master of disguise and while escaping activated the mechanism"');
       }else{
           var texto = document.createTextNode('Enamorados: “es muy tarde, el jefe es un maestro del disfraz y mientras escapa activó el mecanismo”');
       }
        
        parrafo.appendChild(texto);
        document.getElementById("pista").appendChild(parrafo);
    }
    
    pista5 = true;
    
}


function cronometro(){
    
    if(centesimas > 0){
        centesimas--;
        document.getElementById("Centesimas").innerHTML = ":"+centesimas;
    }
    else if(centesimas == 0){
        centesimas = 60;
        document.getElementById("Centesimas").innerHTML = ":"+centesimas;
        segundos--;
        document.getElementById("Segundos").innerHTML = ":"+segundos;
    }
    
    if(segundos == 0){
        minutos--;
        document.getElementById("Minutos").innerHTML = minutos;
        segundos = 60;
        document.getElementById("Segundos").innerHTML = ":"+segundos;
    }
    
    if(minutos <= 0){
        document.getElementById("Minutos").innerHTML = 0;
        document.getElementById("Segundos").innerHTML = ":"+0;
        document.getElementById("Centesimas").innerHTML = ":"+0;
        clearInterval(reloj);
       
        //SE CAMBIA LA PANTALLA A GAME OVER
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 30px Consolas";
        ctx.fillText("GAME OVER",50,50);
    }
}