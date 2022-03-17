let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let pelicula=document.getElementById("Pelicula").value
    console.log(pelicula)
    let cantidad=document.getElementById("Cantidad").value
    console.log(cantidad)
    let asiento=document.getElementById("Asiento").value
    console.log(asiento)
}