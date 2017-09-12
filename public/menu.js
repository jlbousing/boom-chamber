var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mainScreen = new Image();
var startBotton = new Image();

var mouseX, mouseY = 0;

window.addEventListener("load",menu);
//window.addEventListener("resize",resize,false);


//MENÚ PARA SELECCIONAR EL LENGUAJE PARA EL USUARIO
function menu(){
    
    ctx.font = "bold 18px Consolas"; 
    ctx.fillStyle="#000000";
    ctx.fillText("Select your lenguage",50,50);
    
    ctx.font = "bold 14px Consolas";
    ctx.fillText("Spanish",50,80);
    ctx.fillText("English",200,80);
    
    
}


function start(){
    
    //resize();
    mainScreen.src = "Assets/sprites/MAIN-SCREEN-BN-min.png";
    startBotton.src = "Assets/sprites/Start Button-min.png";
    
    mainScreen.onload = function(){
        ctx.drawImage(mainScreen,0,-20);
    }
    
    startBotton.onload = function(){
        ctx.drawImage(startBotton,135,130);
    }
}

/*
function resize(){
    
     //SE CALCULA LA PROPORCIÓN IDEAL PARA LA PANTALLA
     var w = window.innerWidth / canvas.width;
     var h = window.innerHeight / canvas.height;
     var scale = Math.min(h, w);
    
     //SE ASIGNA EL ANCHO Y ALTO
     canvas.style.width = (canvas.width * scale) + 'px';
     canvas.style.height = (canvas.height * scale) + 'px';
}
*/


/*
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    if(screen.width >= 1024){
       
         if((mouseX >= 581 && mouseX <= 735) && (mouseY > 552 && mouseY < 585) && !isStart){
                 alert("SE PRENDIO");
                 isStart = true;
                 console.log("EL JUEGO HA INICIADO :) ");
         }
         else if(screen.width >= 768){
              
              if((mouseX >= 332 && mouseX <= 447) && (mouseY > 327 && mouseY < 347) && !isStart){
                        alert("SE PRENDIO");
                        isStart = true;
                        console.log("EL JUEGO HA INICIADO :)");
                 }
         }
        
     }
    
    
},false);

*/




if(screen.width >= 1024){
    
    document.addEventListener("click",function(evt){
        
        mouseX = evt.pageX - canvas.offsetLeft;
        mouseY = evt.pageY - canvas.offsetTop;
        
        if((mouseX >= 229 && mouseX <= 463) && (mouseY > 322 && mouseY < 360) && !isStart && !isSelected){
                
                english = false;
                start();
        }
         
         if((mouseX >= 894 && mouseX <= 1129) && (mouseY > 322 && mouseY < 360) && !isStart && !isSelected){
                
               
                english = true;
                start();
         }
        
        if((mouseX >= 607 && mouseX <= 771) && (mouseY > 574 && mouseY < 612) && !isStart){
              
              isStart = true;
              init();
              
         }
        
    },false);
}
else if(screen.width >= 768){
    
    
    
     document.addEventListener("click",function(evt){
          
         mouseX = evt.pageX - canvas.offsetLeft;
         mouseY = evt.pageY - canvas.offsetTop;
         
         
            if((mouseX >= 117 && mouseX <= 271) && (mouseY > 173 && mouseY < 215) && !isStart && !isSelected){
                
               
                english = false;
                start();
            }
         
             if((mouseX >= 494 && mouseX <= 625) && (mouseY > 173 && mouseY < 215) && !isStart && !isSelected){
                
             
                english = true;
                start();
            }
            
         
         
            if((mouseX >= 334 && mouseX <= 445) && (mouseY > 307 && mouseY < 367) && !isStart){
                 
                 isStart = true;
                 init(); //SE CAMBIA DE ESCENA
                 crearImg("Assets/sprites/pista1.png");
            }
         
            
     
     },false);
}
else if(screen.width >= 360){
    
    document.addEventListener("click",function(evt){
        
        mouseX = evt.pageX - canvas.offsetLeft;
        mouseY = evt.pageY - canvas.offsetTop;
        
        
        if((mouseX >= 54 && mouseX <= 129) && (mouseY > 77 && mouseY < 102) && !isStart && !isSelected){
                
                
                english = false;
                start();
            }
         
             if((mouseX >= 226 && mouseX <= 303) && (mouseY > 77 && mouseY < 102) && !isStart && !isSelected){
                
                
                english = true;
                start();
            }
        
        
         if((mouseX >= 150 && mouseX <= 208) && (mouseY > 143 && mouseY < 164) && !isStart){
                 
                 isStart = true;
                 init(); //SE CAMBIA DE ESCENA
                 crearImg("Assets/sprites/pista1.png");
            }
        
    },false);
    
}

