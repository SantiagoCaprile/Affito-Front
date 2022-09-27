import { Propiedad } from '../../clases/propiedad.js';

window.onload = function() {
    document.getElementById("propietario-box").style.display = "none";
    const tipo = document.getElementById("tipo-propiedad");
    const dimension = document.getElementById("m2");
    const estado = document.getElementById("estado");
    const precio = document.getElementById("precio");
    const moneda = document.getElementById("moneda");
    const descripcion = document.getElementById("descripcion")
    const localidad = document.getElementById("localidad")
    const calle = document.getElementById("calle");
    const altura = document.getElementById("altura");
    const piso = document.getElementById("piso")
    const btnGuardar = document.getElementById("btn-crear-propiedad");
    // Casa muy grande con doble cochera
    btnGuardar.addEventListener("click", function(e) {
        e.preventDefault()
        const prop = new Propiedad(
            descripcion.value,
            dimension.value,
            tipo.value,
            calle.value,
            altura.value,
            piso.value,
            dpto.value,
            localidad.value,
            estado.value,
            precio.value,
            moneda.value,
            null //cambiar cuando esté hecho en el enlace
        )
        prop.guardarPropiedad()
        alert("Cargada correctamente");
        window.location.href = "/public/index.html";
    });
}
