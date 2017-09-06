var canvas = document.getElementById("canvas"); //SE INICIALIZA EL CANVAS
var ctx = canvas.getContext("2d"); //SE INICIALIZA EL CONTEXTO DE CANVAS

var mouseX, mouseY = 0;

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


window.addEventListener("load",init);


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
}


//SE CREAN EVENTOS DE CLICK PARA ACTIVAR A CADA SOSPECHOSO
document.addEventListener("click",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    //SOSPECHOSO 1
    if((mouseX >= 338 && mouseX <= 415) && (mouseY > 342 && mouseY < 477)){
        alert("Sospechoso 1");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 2
    if((mouseX >= 825 && mouseX <= 873) && (mouseY > 276 && mouseY < 405)){
        alert("Sospechoso 2");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 3
    if((mouseX >= 764 && mouseX <= 817) && (mouseY > 540 && mouseY < 669)){
        alert("Sospechoso 3");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 4
    if((mouseX >= 768 && mouseX <= 824) && (mouseY > 344 && mouseY < 493)){
        alert("Sospechoso 4");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 5
    if((mouseX >= 107 && mouseX <= 166) && (mouseY > 120 && mouseY < 262)){
        alert("Sospechoso 5");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 6
    if((mouseX >= 99 && mouseX <= 160) && (mouseY > 365 && mouseY < 503)){
        alert("Sospechoso 6");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 7
    if((mouseX >= 165 && mouseX <= 223) && (mouseY > 430 && mouseY < 573)){
        alert("Sospechoso 7");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 8
    if((mouseX >= 831 && mouseX <= 909) && (mouseY > 541 && mouseY < 669)){
        alert("Sospechoso 8");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 9
    if((mouseX >= 142 && mouseX <= 190) && (mouseY > 258 && mouseY < 329)){
        alert("Sospechoso 9");
        console.log("toco al sospechoso");
    }
    
    //SOSPECHOSO 10
    if((mouseX >= 1311 && mouseX <= 1335) && (mouseY > 363 && mouseY < 516)){
        alert("Sospechoso 10");
        console.log("toco al sospechoso");
    }
    
    //TERRORISTA
    if((mouseX >= 35 && mouseX <= 99) && (mouseY > 244 && mouseY < 376)){
        alert("TERRORISTA");
        console.log("toco al sospechoso");
    }
    
},false);



document.addEventListener("mousemove",function(evt){
    
    mouseX = evt.pageX - canvas.offsetLeft;
    mouseY = evt.pageY - canvas.offsetTop;
    
    console.log(mouseX+";"+mouseY);
    
    
    
},false);


