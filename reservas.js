let sillareservada=document.getElementById("sillareservada")
sillareservada.addEventListener("click", function(evento){
    if(evento.target.classList.contains("w-50")){
        evento.target.src="img/azul.png"

    } 
})