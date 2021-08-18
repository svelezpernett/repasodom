console.log("Hola mundo");

var boton = document.getElementById("boton");


function cambiarCancion()
{
    var cancion1 = document.getElementById("cancion1");

    if(cancion1.src="audio/kiñoDetrote.mp3")
    {
        cancion1.src="audio/kiñoGusfraba.mp3";
        document.getElementById("imagen1").src="img/img2.jpg";
    }
    else
    {
       cancion1.src="audio/kiñoDetrote.mp3";
       document.getElementById("imagen1").src="img/img1.jpg";  
    }
}

boton.addEventListener("click", cambiarCancion);