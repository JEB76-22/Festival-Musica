
document.addEventListener("DOMContentLoaded", function(){

    crearGaleria()
});

function crearGaleria(){
    const cantidad_imagenes = 16;
    const galeria = document.querySelector(".galeria-imagenes");
    
    for (let i = 0; i <= cantidad_imagenes; i++) {
        
        const imagen = document.createElement("IMG");
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt =  "imagen-galeria"
        galeria.appendChild(imagen);
        // console.log(imagen)
    }
}
