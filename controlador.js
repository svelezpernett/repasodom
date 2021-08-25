console.log("Hola mundo");

let boton = document.getElementById("boton"),
    boton2 = document.getElementById("boton2"),
    cancion1 = document.getElementById("cancion1"),
    cancion2 = document.getElementById("cancion2"),
    cancion3 = document.getElementById("cancion3"),
    img1 = document.getElementById("imagen1"),
    img2 = document.getElementById("imagen2"),
    img3 = document.getElementById("imagen3"),
    titulo1 = document.getElementById("titulo1"),
    titulo2 = document.getElementById("titulo2"),
    titulo3 = document.getElementById("titulo3");



function cambiarCancion()
{
    
    if(cancion1.src="audio/kiñoDetrote.mp3")
    {
        cancion1.src="audio/kiñoMR.mp3";
        img1.src="img/img4.jpg";
        titulo1.textContent="MR";

        cancion2.src="audio/kiñoparchesitodeanden.mp3";
        img2.src="img/img5.jpg";
        titulo2.textContent="Parchesito de anden";

        cancion3.src="audio/kiñosoñandocomoloco.mp3";
        img3.src="img/img6.jpg";
        titulo3.textContent="Soñando como loco";
    }
    
}

boton.addEventListener("click", cambiarCancion);


function devolverCancion()
{
    if(cancion1.src="audio/kiñoMR.mp3")
    {
        cancion1.src = "audio/kiñoDetrote.mp3";
        img1.src="img/img1.jpg";
        titulo1.textContent="De trote";

        cancion2.src="audio/kiñoGusfraba.mp3";
        img2.src="img/img2.jpg";
        titulo2.textContent="Gusfraba";

        cancion3.src="audio/kiñoRapYHierbas.mp3";
        img3.src="img/img3.jpg";
        titulo3.textContent="Rap y hierbas";
    }
}

boton2.addEventListener("click", devolverCancion);