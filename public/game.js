var canvas = document.getElementById("canvas"); //SE INICIALIZA EL CANVAS
var ctx = canvas.getContext("2d"); //SE INICIALIZA EL CONTEXTO DE CANVAS
var isStart = false; //BOOLEAN PARA VALIDAR EL INGRESO AL JUEGO
var isSelected = false; 

var english = null;

var background = new Image();
var estatua = new Image();
var muchedumbre = new Image();
var sospechoso1 = new Image();
var sospechoso2 = new Image();
var sospechoso3 = new Image();
var sospechoso4 = new Image();
var sospechoso5 = new Image();
var sospechoso6 = new Image();
var sospechoso7 = new Image();
var sospechoso8 = new Image();
var sospechoso9 = new Image();
var sospechoso10 = new Image();
var terrorista = new Image();

var pista1 = new Image();
var pista2 = new Image();
var pista3 = new Image();

//window.addEventListener("load",init);


//MÉTODO QUE INICIALIZA EL JUEGO
function init(){
    
    background.src = "Assets/sprites/img/Piso-Mar-min.png"; 
    estatua.src = "Assets/sprites/img/Estatua-min.png";
    muchedumbre.src = "Assets/sprites/img/Muchedumbre-min.png";
    sospechoso1.src = "Assets/sprites/img/sospechoso1.png";
    sospechoso2.src = "Assets/sprites/img/sospechoso2.png";
    sospechoso3.src = "Assets/sprites/img/sospechoso3.png";
    sospechoso4.src = "Assets/sprites/img/sospechoso4.png";
    sospechoso5.src = "Assets/sprites/img/sospechoso5.png";
    sospechoso6.src = "Assets/sprites/img/sospechoso6.png";
    sospechoso7.src = "Assets/sprites/img/sospechoso7.png";
    sospechoso8.src = "Assets/sprites/img/sospechoso8.png";
    sospechoso9.src = "Assets/sprites/img/sospechoso9.png";
    sospechoso10.src = "Assets/sprites/img/sospechoso10.png"; 
    terrorista.src = "Assets/sprites/img/terrorista.png";
    pista1.src = "Assets/sprites/pista1.png";
    pista2.src = "Assets/sprites/pista2.png";
    pista3.src = "Assets/sprites/pista3.png";
    
    //VALIDACIÓN PARA QUE DIBUJE LA IMAGEN EL CANVAS SOLO CUANDO LA IMAGEN SE CARGUE
    background.onload = function(){
        ctx.drawImage(background,0,0);
    }
    
    
    estatua.onload = function(){
        ctx.drawImage(estatua,195,0);
    }
    
    muchedumbre.onload = function(){
        ctx.drawImage(muchedumbre,0,13);
    }
    
    sospechoso1.onload = function(){
        ctx.drawImage(sospechoso1,73,75);
    }
    
    sospechoso2.onload = function(){
        ctx.drawImage(sospechoso2,184,60);
    }
    
    sospechoso3.onload = function(){
        ctx.drawImage(sospechoso3,170,120);
    }
    
    sospechoso4.onload = function(){
        ctx.drawImage(sospechoso4,170,75);
    }
    
    sospechoso5.onload = function(){
        ctx.drawImage(sospechoso5,20,25);
    }
    
    sospechoso6.onload = function(){
        ctx.drawImage(sospechoso6,20,80);
    }
    
    sospechoso7.onload = function(){
       ctx.drawImage(sospechoso7,35,95);
    }
    
    sospechoso8.onload = function(){
        ctx.drawImage(sospechoso8,185,120);
    }
    
    sospechoso9.onload = function(){
        ctx.drawImage(sospechoso9,30,55);
    }
    
    sospechoso10.onload = function(){
        ctx.drawImage(sospechoso10,290,83);
    }
    
    terrorista.onload = function(){
        ctx.drawImage(terrorista,5,50);
    }
    
    
    textoPista1(); //SE ACTIVA LA PRIMERA PISTA
}



//CONDICIÓN PARA ACTIVAR LOS EVENTOS DE CLICK EN UNA RESOLUCIÓN DE DESKTOP
if(screen.width >= 1024){
    
   
//SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    //SOSPECHOSO 1
    if((mouseX >= 338 && mouseX <= 415) && (mouseY > 342 && mouseY < 477) && isStart){
        alert("Sospechoso 1");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 2
    if((mouseX >= 825 && mouseX <= 873) && (mouseY > 276 && mouseY < 405) && isStart){
        alert("Sospechoso 2");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 3
    if((mouseX >= 764 && mouseX <= 817) && (mouseY > 540 && mouseY < 669) && isStart){
        alert("Sospechoso 3");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 4
    if((mouseX >= 768 && mouseX <= 824) && (mouseY > 344 && mouseY < 493) && isStart){
        alert("Sospechoso 4");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 5
    if((mouseX >= 107 && mouseX <= 166) && (mouseY > 120 && mouseY < 262) && isStart){
        alert("Sospechoso 5");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 6
    if((mouseX >= 99 && mouseX <= 160) && (mouseY > 365 && mouseY < 503) && isStart){
        alert("Sospechoso 6");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 165 && mouseX <= 223) && (mouseY > 430 && mouseY < 573) && isStart){
        alert("Sospechoso 7");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 8
    if((mouseX >= 831 && mouseX <= 909) && (mouseY > 541 && mouseY < 669) && isStart){
        alert("Sospechoso 8");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 9
    if((mouseX >= 142 && mouseX <= 190) && (mouseY > 258 && mouseY < 329) && isStart){
        alert("Sospechoso 9");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 10
    if((mouseX >= 1311 && mouseX <= 1335) && (mouseY > 363 && mouseY < 516) && isStart){
        alert("Sospechoso 10");
        console.log("toco al sospechoso");
    }
    
    //TERRORISTA
    if((mouseX >= 35 && mouseX <= 99) && (mouseY > 244 && mouseY < 376) && isStart){
        alert("TERRORISTA");
        console.log("toco al sospechoso");
    }
    
},false);
    
   
} //PARA RESOLUCIÓN MEDIANA
else if(screen.width >= 768){
        
    
    //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    //SOSPECHOSO 1
    if((mouseX >= 194 && mouseX <= 236) && (mouseY > 196 && mouseY < 272) && isStart){
        alert("Sospechoso 1");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 2
    if((mouseX >= 463 && mouseX <= 503) && (mouseY > 156 && mouseY < 225) && isStart){
        alert("Sospechoso 2");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 3
    if((mouseX >= 427 && mouseX <= 460) && (mouseY > 312 && mouseY < 380) && isStart){
        alert("Sospechoso 3");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 4
    if((mouseX >= 434 && mouseX <= 472) && (mouseY > 192 && mouseY < 278) && isStart){
        alert("Sospechoso 4");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 5
    if((mouseX >= 52 && mouseX <= 96) && (mouseY > 63 && mouseY < 147) && isStart){
        alert("Sospechoso 5");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 6
    if((mouseX >= 49 && mouseX <= 96) && (mouseY > 206 && mouseY < 278) && isStart){
        alert("Sospechoso 6");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 94 && mouseX <= 140) && (mouseY > 243 && mouseY < 327) && isStart){
        alert("Sospechoso 7");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 8
    if((mouseX >= 463 && mouseX <= 520) && (mouseY > 296 && mouseY < 378) && isStart){
        alert("Sospechoso 8");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 9
    if((mouseX >= 72 && mouseX <= 116) && (mouseY > 147 && mouseY < 218) && isStart){
        alert("Sospechoso 9");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 10
    if((mouseX >= 727 && mouseX <= 758) && (mouseY > 200 && mouseY < 294) && isStart){
        alert("Sospechoso 10");
        console.log("toco al sospechoso");
    }
    
    //TERRORISTA
    if((mouseX >= 9 && mouseX <= 58) && (mouseY > 132 && mouseY < 216) && isStart){
        alert("TERRORISTA");
        console.log("toco al sospechoso");
    }
    
},false);
    
    
} //PARA RESOLUCIONES PEQUEÑAS
else if(screen.width >= 360){
    
    
       //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    //SOSPECHOSO 1
    if((mouseX >= 86 && mouseX <= 108) && (mouseY > 88 && mouseY < 126) && isStart){
        alert("Sospechoso 1");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 2
    if((mouseX >= 212 && mouseX <= 230) && (mouseY > 72 && mouseY < 106) && isStart){
        alert("Sospechoso 2");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 3
    if((mouseX >= 198 && mouseX <= 214) && (mouseY > 140 && mouseY < 174) && isStart){
        alert("Sospechoso 3");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 4
    if((mouseX >= 197 && mouseX <= 215) && (mouseY > 89 && mouseY < 130) && isStart){
        alert("Sospechoso 4");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 5
    if((mouseX >= 26 && mouseX <= 46) && (mouseY > 30 && mouseY < 70) && isStart){
        alert("Sospechoso 5");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 6
    if((mouseX >= 26 && mouseX <= 46) && (mouseY > 94 && mouseY < 135) && isStart){
        alert("Sospechoso 6");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 48 && mouseX <= 63) && (mouseY > 112 && mouseY < 150) && isStart){
        alert("Sospechoso 7");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 8
    if((mouseX >= 216 && mouseX <= 239) && (mouseY > 138 && mouseY < 175) && isStart){
        alert("Sospechoso 8");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 9
    if((mouseX >= 36 && mouseX <= 53) && (mouseY > 65 && mouseY < 105) && isStart){
        alert("Sospechoso 9");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 10
    if((mouseX >= 336 && mouseX <= 349) && (mouseY > 96 && mouseY < 135) && isStart){
        alert("Sospechoso 10");
        console.log("toco al sospechoso");
    }
    
    //TERRORISTA
    if((mouseX >= 6 && mouseX <= 30) && (mouseY > 63 && mouseY < 101) && isStart){
        alert("TERRORISTA");
        console.log("toco al sospechoso");
    }
    
},false);
    
    
} //PARA RESOLUCIONES MUY PEQUEÑAS
else if(screen.width >= 320){
    
    
    
       //SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    //SOSPECHOSO 1
    if((mouseX >= 74 && mouseX <= 100) && (mouseY > 80 && mouseY < 112) && isStart){
        alert("Sospechoso 1");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 2
    if((mouseX >= 188 && mouseX <= 206) && (mouseY > 62 && mouseY < 97) && isStart){
        alert("Sospechoso 2");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 3
    if((mouseX >= 176 && mouseX <= 191) && (mouseY > 122 && mouseY < 156) && isStart){
        alert("Sospechoso 3");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 4
    if((mouseX >= 174 && mouseX <= 196) && (mouseY > 79 && mouseY < 118) && isStart){
        alert("Sospechoso 4");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 5
    if((mouseX >= 22 && mouseX <= 43) && (mouseY > 28 && mouseY < 62) && isStart){
        alert("Sospechoso 5");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 6
    if((mouseX >= 22 && mouseX <= 39) && (mouseY > 82 && mouseY < 118) && isStart){
        alert("Sospechoso 6");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 38 && mouseX <= 57) && (mouseY > 98 && mouseY < 134) && isStart){
        alert("Sospechoso 7");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 8
    if((mouseX >= 190 && mouseX <= 213) && (mouseY > 122 && mouseY < 155) && isStart){
        alert("Sospechoso 8");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 9
    if((mouseX >= 30 && mouseX <= 47) && (mouseY > 60 && mouseY < 93) && isStart){
        alert("Sospechoso 9");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 10
    if((mouseX >= 297 && mouseX <= 311) && (mouseY > 86 && mouseY < 122) && isStart){
        alert("Sospechoso 10");
        console.log("toco al sospechoso");
    }
    
    //TERRORISTA
    if((mouseX >= 6 && mouseX <= 26) && (mouseY > 54 && mouseY < 91) && isStart){
        alert("TERRORISTA");
        console.log("toco al sospechoso");
    }
    
},false);
        
}


console.log("Resolucion "+screen.width);


/*
document.addEventListener("mousemove",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    console.log(mouseX+";"+mouseY);
    
    
    
},false); */

//FUNCIÓN PARA CREAR IMAGENES DE LAS PISTAS EN EL DOM
function textoPista1(){
    
    var parrafo = document.createElement('p');
    
    if(english){
         var texto = document.createTextNode("Someone is prowling around, apparently in a rush, he dropped his suitcase");
    }
    else{
         var texto = document.createTextNode("Alguien está merodeando por ahí, aparentemente con prisa, dejó caer su maleta");
    }
    
    parrafo.appendChild(texto);
    
    document.getElementById("pista").appendChild(parrafo);
}
