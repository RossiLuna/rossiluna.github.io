let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagenes/mi_imagen2.jpg') {
        miImage.setAttribute('src', 'imagenes/mi_imagen.jpg');
    } else {
        miImage.setAttribute('src', 'imagenes/mi_imagen2.jpg');
    }
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Fundamentos básicos de la nanotecnología. \n Hola, ' + miNombre;
    }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Fundamentos básicos de la nanotecnología. \n Hola, ' + nombreAlmacenado;
}
miBoton.onclick = function () {
    estableceNombreUsuario();
}
