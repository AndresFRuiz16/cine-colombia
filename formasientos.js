let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let pelicula=document.getElementById("pelicula").value
    console.log(pelicula)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let asiento=document.getElementById("asiento").value
    console.log(asiento)
    let subtotal=asiento*cantidad
    alert("su total a pagar es de $"+subtotal)
}
