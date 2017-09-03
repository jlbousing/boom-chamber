window.addEventListener("load",init);

function init(){
    
    var canvas = document.getElementById("canvas"); //SE INICIALIZA EL CANVAS
    //canvas.height = screen.height;
    //canvas.width = screen.width;
    
    
    var ctx = canvas.getContext("2d"); //SE INICIALIZA EL CONTEXTO DE CANVAS
    var background = new Image();
    background.src = "/Assets/pruebaBG.jpg"; 
    
    //VALIDACIÓN PARA QUE DIBUJE LA IMAGEN EL CANVAS SOLO CUANDO LA IMAGEN SE CARGUE
    background.onload = function(){
        ctx.drawImage(background,0,0);
    }
}

