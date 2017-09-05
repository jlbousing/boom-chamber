window.addEventListener("load",init);

function init(){
    
    var canvas = document.getElementById("canvas"); //SE INICIALIZA EL CANVAS
    //canvas.height = screen.height;
    //canvas.width = screen.width;
    
    
    var ctx = canvas.getContext("2d"); //SE INICIALIZA EL CONTEXTO DE CANVAS
    
    var background = new Image();
    background.src = "Assets/sprites/img/Piso-Mar-min.png"; 
    
    var estatua = new Image();
    estatua.src = "Assets/sprites/img/Estatua-min.png";
    
    var muchedumbre = new Image();
    muchedumbre.src = "Assets/sprites/img/Muchedumbre-min.png";
    
    var sospechoso1 = new Image();
    sospechoso1.src = "Assets/sprites/img/sospechoso1.png";
    
    var sospechoso2 = new Image();
    sospechoso2.src = "Assets/sprites/img/sospechoso2.png";
    
    var sospechoso3 = new Image();
    sospechoso3.src = "Assets/sprites/img/sospechoso3.png";
    
    var sospechoso4 = new Image();
    sospechoso4.src = "Assets/sprites/img/sospechoso4.png";
    
    var sospechoso5 = new Image();
    sospechoso5.src = "Assets/sprites/img/sospechoso5.png";
    
    var sospechoso6 = new Image();
    sospechoso6.src = "Assets/sprites/img/sospechoso6.png";
    
    var sospechoso7 = new Image();
    sospechoso7.src = "Assets/sprites/img/sospechoso7.png";
    
    var sospechoso8 = new Image();
    sospechoso8.src = "Assets/sprites/img/sospechoso8.png";
    
    var sospechoso9 = new Image();
    sospechoso9.src = "Assets/sprites/img/sospechoso9.png";
    
    var sospechoso10 = new Image();
    sospechoso10.src = "Assets/sprites/img/sospechoso10.png";
    
    var terrorista = new Image();
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



